/*
 * Copyright 2024 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Transformer } from './transformer';
import { normalizeUrl } from './rewriteDocLinks';

export const liftMetaRedirects = (): Transformer => {
  return dom => {
    for (const elem of Array.from(dom.querySelectorAll('meta'))) {
      if (elem.getAttribute('http-equiv') === 'refresh') {
        const metaContentParameters = elem
          .getAttribute('content')
          ?.split('url=');
        if (!metaContentParameters || metaContentParameters.length < 2) {
          continue;
        }
        const relUrl = metaContentParameters[1];
        const normalizedCurrentUrl = normalizeUrl(window.location.href);
        const absoluteRedirect = new URL(relUrl, normalizedCurrentUrl).href;

        const newContentValue = metaContentParameters[0].includes(';')
          ? `${metaContentParameters[0]}url=${absoluteRedirect}`
          : `url=${absoluteRedirect}`;
        elem.setAttribute('content', newContentValue);

        // Lift the meta tag from shadowDom to the main document
        document.body.appendChild(elem);
      }
    }
    return dom;
  };
};
