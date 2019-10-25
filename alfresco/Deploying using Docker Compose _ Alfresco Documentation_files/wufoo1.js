var topic_url;
if (document.URL.indexOf('?') == -1) {
    topic_url = document.location.toString();
} else {
    topic_url = document.URL.substr(0, document.URL.indexOf('?'));
}
if (topic_url.indexOf('https://') == -1) {
    topic_url = topic_url.replace("http://", "");
} else {
    topic_url = topic_url.replace("https://", "");
}
var ssl_mode;
ssl_mode = document.location.protocol == "https:" ? true : "unset";
var encoded_url = encodeURIComponent(topic_url);
var z7x3p9;(function(d, t) {
      var s = d.createElement(t), options = {
        'userName':'alfresco',
        'formHash':'z7x3p9',
        'autoResize':true,
        'defaultValues': 'field5=' + topic_url,
        'height':'228',
        'ssl': ssl_mode,
        'async':true,
        'header':'show'};
      s.src = '//wufoo.com/scripts/embed/form.js';
      s.onload = s.onreadystatechange = function() {
        var rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return;
        try {
          z7x3p9 = new WufooForm();z7x3p9.initialize(options);z7x3p9.display();
        } catch (e) {

        }
      };
      var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr);
      })(document, 'script');
