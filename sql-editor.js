

(function (global) {
    'use strict';

    var MatrixEditor = function (element) {

        var tokens = {};

        element.addEventListener("keydown keyup", function (e) {
            if (e.keyCode > 13) {
                text = this.innerText;
                word = text.split(/\b/g);

                while (this.firstChild) {
                    this.removeChild(this.firstChild);
                }
                _this = this;
                for (i = 0; i < word.length; i++) {
                    name = word[i + 2] && tokens[word[i].toUpperCase().trim() + ' ' + word[i + 2].toUpperCase().trim()];
                    if (name) {
                        elem = document.createElement('span');
                        elem.setAttribute('class', name);
                        elem.innerText = word[i++];
                        _this.appendChild(elem);
                        elem = document.createElement('span');
                        elem.innerText = word[i++];
                        _this.appendChild(elem);
                        elem = document.createElement('span');
                        elem.setAttribute('class', name);
                        elem.innerText = word[i];
                        _this.appendChild(elem);
                        continue;
                    }
                    name = tokens[word[i].toUpperCase().trim()];
                    if (name) {
                        elem = document.createElement('span');
                        elem.setAttribute('class', name);
                        elem.innerText = word[i];
                        _this.appendChild(elem);
                    } else {
                        elem = document.createElement('span');
                        elem.innerText = word[i];
                        _this.appendChild(elem);
                    }
                }

                child = this.children;
                range = document.createRange();
                sel = window.getSelection();
                try { range.setStart(child[child.length - 1], 1); } catch (err) { }
                range.collapse(true);
                sel.removeAllRanges();
                sel.addRange(range);
                this.focus();
            }
        });
    };

    // AMD support
    if (typeof define === 'function' && define.amd) {
        define(function () { return MatrixEditor; });
        // CommonJS and Node.js module support.
    } else if (typeof exports !== 'undefined') {
        // Support Node.js specific `module.exports` (which can be a function)
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = MatrixEditor;
        }
        // But always support CommonJS module 1.1.1 spec (`exports` cannot be a function)
        exports.MatrixEditor = MatrixEditor;
    } else {
        global.MatrixEditor = MatrixEditor;
    }
})(this);

