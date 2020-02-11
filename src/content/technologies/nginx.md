---
title: NGINX
tags: ["nodejs","python"]
competence: "advanced"
---

NGINX very frequently sits in front of services in my projects, whether as a local instance for testing, an ingress in the case of [cluster-based](/technologies/docker) deployments, or simply as the main http entrypoint on more traditional servers. My knowledge of its placement within typical workflows is quite good, and I have also relied on more secondary features in certain cases, like using its [auth subrequest module](http://www.nginx.org/en/docs/http/ngx_http_auth_request_module.html#auth_request) to wrap custom authentication flows around otherwise statically served content; in other words, I can have paramaterized URLs (`/byCollege/AS`) across static reports checked automatically within the request cycle against the current campus user, with no special requirements for the construction of the static site itself other than adhering to certain URL patterns.

Having lived under the rule of [Apache](/technologies/legacy) for a painful time, I have the attitude towards NGINX of someone who recognizes exactly what forms of deployment headaches it was introduced to solve. 