#!/bin/sh
# Rebuild the single file served by the CDN
cd "$(dirname "$0")" && cat catalog.js demos.js demos-h.js demos-[0-9]*.js core.js > uip.js && node -e "global.window={};global.document={};require('./uip.js');let n=0;for(const k in window.UIP_DEMOS){window.UIP_DEMOS[k]((a,b)=>a);n++};console.log('ok, previews:',n)"
