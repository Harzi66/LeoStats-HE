// Harzi's C&C TA Script Pack - leoStats
// Original: leoStats by leo7044
// Lokale Firefox-Integration

(function () {
    'use strict';

    function isEnabled() {
        const marker =
            document.getElementById('harzi-ccta-script-states');

        return (
            marker &&
            marker.getAttribute('data-leostats') === 'on'
        );
    }

    function loadLocalScript(
        filename,
        id,
        onload,
        onerror
    ) {
        const existing =
            document.getElementById(id);

        if (existing) {
            if (onload) {
                onload();
            }

            return existing;
        }

        const script =
            document.createElement('script');

        script.type = 'text/javascript';
        script.id = id;
        script.async = true;

        script.src =
            chrome.runtime.getURL(filename);

        if (onload) {
            script.onload = onload;
        }

        if (onerror) {
            script.onerror = onerror;
        }

        const firstScript =
            document.getElementsByTagName('script')[0];

        if (
            firstScript &&
            firstScript.parentNode
        ) {
            firstScript.parentNode.insertBefore(
                script,
                firstScript
            );
        } else {
            (
                document.head ||
                document.documentElement
            ).appendChild(script);
        }

        return script;
    }

    function connect() {
        if (!isEnabled()) {
            return;
        }

        try {
            console.log(
                'leoStats connect initialisation...'
            );

            const jqueryReady =
                typeof window.jQuery === 'function'
                    ? function (done) {
                          done();
                      }
                    : function (done) {
                          loadLocalScript(
                              'jquery-3.7.1.min.js',
                              'harzi-leostats-jquery',
                              done,
                              function () {
                                  console.log(
                                      'leoStats connect error : jQuery could not be loaded'
                                  );
                              }
                          );
                      };

            jqueryReady(function () {
                loadLocalScript(
                    'leostats_server.min.js',
                    'leoStats',
                    null,
                    function (e) {
                        console.log(
                            'leoStats connect error : ',
                            e
                        );
                    }
                );
            });
        } catch (e) {
            console.log(
                'leoStats connect error : ',
                e
            );
        }
    }

    connect();

    document.addEventListener(
        'harzi-ccta-script-state',
        connect,
        false
    );
})();
