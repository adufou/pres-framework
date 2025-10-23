// Adapted from @cmudig/editor for Observable Framework
// Original: https://observablehq.com/@cmudig/editor

import { CodeJar } from "../../_node/codejar@3.7.0/index.356d966d.js";
import hljs from "../../_node/highlight.js@10.7.3/index.3de74535.js";
import debounce from "../../_node/lodash.debounce@4.0.8/index.35efac82.js";

export const createEditor = () => {
  const highlightjs = hljs;


  const defaultStyles = `
    border: 1px solid #eee;
    background: #fafafa;
    font-family: Menlo,Consolas,monospace;
    font-size: 13px;
    padding: 10px;
    tab-size: 4;
    line-height: 1.4;
    overflow-wrap: break-word;
  `;

  const languageLabelStyles = `
    z-index: 1;
    position: absolute;
    right: 25px;
    font-size: 12px;
    font-family: Menlo,Consolas,monospace;
    color: black;
    font-weight: bold;
    user-select: none;
    opacity: 0.2;
  `;

  const runButton = `<path d=" M11.7206 6.94335 C12.2406 7.34365 12.2406 8.12786 11.7206 8.52816L5.60999 13.2321 C4.95242 13.7383 4 13.2696 4 12.4397L4 3.03178 C4 2.20194 4.95243 1.73318 5.60999 2.23937L11.7206 6.94335Z "></path>`;

  function highlighter(editor) {
    editor.textContent = editor.textContent;
    highlightjs.highlightElement(editor);
  }

  return function Editor(opt = {}) {
    const {
      language = 'plaintext',
      styles = defaultStyles,
      value = '',
      label = '',
      lineNumbers = false,
      instant = false,
      highlight = highlighter,
      debounced: debouncedDelay = 0,
      codeJarOpts = { preserveIdent: false },
      ...rest
    } = opt;

    const container = document.createElement('div');

    const run = document.createElement('div');
    run.style.display = 'none';
    run.style.position = 'absolute';
    run.style.right = '10px';
    run.style.cursor = 'pointer';
    run.style.top = label && typeof label === 'string' ? '32px' : '7px';
    run.style.zIndex = '1';

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '12');
    svg.setAttribute('height', '12');
    svg.setAttribute('viewbox', '0 0 14 14');
    svg.innerHTML = runButton;
    run.appendChild(svg);

    container.addEventListener('mouseenter', () => {
      run.style.display = 'inline-block';
    });

    container.addEventListener('mouseleave', () => {
      run.style.display = 'none';
    });

    container.appendChild(run);

    let shiftDown = false;

    if (label) {
      const isString = typeof label === 'string';
      const lb = document.createElement(isString ? 'label' : 'div');
      if (isString) {
        lb.style.display = 'block';
        lb.style.fontFamily = 'sans-serif';
        lb.style.color = '#333';
        lb.style.fontSize = '0.9em';
        lb.textContent = label + ':';
      } else {
        lb.appendChild(label);
      }
      container.appendChild(lb);
    }

    const langLabel = document.createElement('span');
    langLabel.style.cssText = languageLabelStyles;
    langLabel.style.top = label && typeof label === 'string' ? '35px' : '10px';
    langLabel.textContent = language;
    container.appendChild(langLabel);

    const ed = document.createElement('div');
    ed.style.cssText = styles + ` padding-left: ${lineNumbers ? '45px' : '10px'};`;
    ed.className = `language-${language}`;
    ed.textContent = value;
    container.appendChild(ed);
    container.value = value;

    const jar = CodeJar(ed, highlight, codeJarOpts);

    let settingInternally = false;

    Object.defineProperty(container, 'value', {
      get() {
        return ed.textContent;
      },
      set(v) {
        if (!settingInternally) {
          ed.textContent = v;
          jar.updateCode(v);
        }
        settingInternally = false;
      }
    });

    ed.addEventListener('input', (e) => {
      e.stopPropagation();
    });

    ed.addEventListener('keydown', (e) => {
      if (e.key === 'Shift') shiftDown = true;
      if (e.key === 'Enter') {
        if (shiftDown) {
          e.preventDefault();
          container.value = ed.textContent;
          container.dispatchEvent(new CustomEvent('input', { bubbles: true }));
        }
      }
    });

    run.addEventListener('click', () => {
      container.value = ed.textContent;
      container.dispatchEvent(new CustomEvent('input', { bubbles: true }));
    });

    ed.addEventListener('keyup', (e) => {
      if (e.key === 'Shift') shiftDown = false;
    });

    const debouncedUpdate = debounce((code) => {
      settingInternally = true;
      container.value = code;
      container.dispatchEvent(new CustomEvent('input', { bubbles: true }));
    }, debouncedDelay);

    jar.onUpdate((code) => {
      if (instant || debouncedDelay > 0) {
        debouncedUpdate(code);
      }
    });

    return container;
  };
};
