# LeoStats-HE

**LeoStats – Harzi Edition für C&C Tiberium Alliances**

Diese Repository enthält die für **Harzi's C&C TA Script Pack** angepasste, lokal eingebundene Firefox-Erweiterungsvariante von **leoStats**.

## Herkunft

- **Original:** leoStats
- **Originalautor:** leo7044
- **Originalversion:** 2020.02.02.2
- **Harzi Edition:** technische Integration für die Firefox Extension

Die ursprüngliche Funktionalität von leoStats bleibt erhalten. Für die Firefox-Erweiterung werden die benötigten JavaScript-Dateien lokal aus der Extension geladen. Dadurch ist die Erweiterung nicht mehr darauf angewiesen, ausführbaren JavaScript-Code von einer externen Website nachzuladen.

## Enthaltene Dateien

- `main_leostats.js` – Integration/Startdatei des Script Packs
- `leostats_server.min.js` – lokal eingebundener leoStats-/BaseScanner-Code
- `jquery-3.7.1.min.js` – lokal eingebundene jQuery-Version 3.7.1

## Verwendung

Diese Repository dient als führende Quelle für die **LeoStats-HE-Version innerhalb des Harzi's C&C TA Script Packs**.

Die Dateien sind für die Verwendung innerhalb der Firefox-Erweiterung vorgesehen und bilden dort gemeinsam die lokale LeoStats-Integration.

## Hinweis zur ursprünglichen Quelle

LeoStats wurde ursprünglich von **leo7044** entwickelt. Die Harzi Edition verändert die Einbindung für die Verwendung innerhalb des Script Packs, insbesondere die lokale Bereitstellung der benötigten JavaScript-Dateien.
