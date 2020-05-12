const Print = function(dom) {
  if (!(this instanceof Print)) return new Print(dom);
  if ((typeof dom) === "string") {
    this.dom = document.querySelector(dom);
  } else {
    this.dom = dom;
  }
  this.init();
};
Print.prototype = {
  init: function() {
    var objDiv = document.createElement("div");
    objDiv = this.dom.cloneNode(true)
    let htmlBody = objDiv.innerHTML;
    var content = this.htmlStyle() + '<body>' + htmlBody + '</body>';
    this.writeIframe(content);
  },
  htmlStyle: function() {
    var str = "",
      styles = document.querySelectorAll('style,link');
    for (var i = 0; i < styles.length; i++) {
      str += styles[i].outerHTML;
    }
    return str;
  },
  writeIframe: function(content) {
    var w, doc, iframe = document.createElement('iframe'),
      f = document.body.appendChild(iframe);
    iframe.id = "printIframe";
    iframe.setAttribute('style', 'position:absolute;width:0;height:0;top:-10px;left:-10px;');
    w = f.contentWindow || f.contentDocument;
    doc = f.contentDocument || f.contentWindow.document;
    doc.open();
    doc.write(content);
    doc.close();
    var _this = this
    iframe.onload = function() {
      _this.toPrint(w);
      setTimeout(function() {
        document.body.removeChild(iframe)
      }, 100)
    }
  },
  toPrint: function(frameWindow) {
    try {
      setTimeout(function() {
        frameWindow.focus();
        try {
          if (!frameWindow.document.execCommand('print', false, null)) {
            frameWindow.print();
          }
        } catch (e) {
          frameWindow.print();
        }
        frameWindow.close();
      }, 10);
    } catch (err) {
      console.log('err', err);
    }
  },
};
const printPlugIn = {}
printPlugIn.install = function(Vue) {
  Vue.prototype.$print = Print;
}
export default printPlugIn
