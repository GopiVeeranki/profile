## lumos-static-assets

 Static Assets for Lumos Jekyll Project.

### Owners

> sainagarj.tadiparthi

### How to build on Jenkins
* Create a `pom.xml` file at the root level
* Go to the [BT1 Service Catalog](https://buildtools1.service-now.com/nav_to.do?uri=%2Fcom.glideapp.servicecatalog_cat_item_view.do%3Fv%3D1%26sysparm_id%3D9dbd0c54db1acb403a3d5dd5ce961948%26sysparm_link_parent%3Dad2fecb72bfc310052f7c71317da157e%26sysparm_catalog%3De0d08b13c3330100c8b837659bba8fb4%26sysparm_catalog_view%3Dess%26sysparm_view%3Dess) to request a Jenkins job

Once the request is processed, a multi-branch job is created on https://buildmaster-hotel.devsnc.com and will build any branches that match [ServiceNow branch naming convention](https://buildtools1.service-now.com/kb_view_customer.do?sysparm_article=KB0528607).
