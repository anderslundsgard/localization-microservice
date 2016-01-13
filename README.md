# localization-microservice
Localized content on your fingertips. Or at least RESTful access to your translated texts.

## Purpose
Several [l18n](http://continuousdeliveryeu.azurewebsites.net/) applications I've seen have some kind of core component attached to the product and there by also couppled to its deploy cycle. This project aim to make a localization service that is:
* small
* independent deployable
* is able to serve inserts/updates/deltes of texts via REST api
* having a GUI to creat new, change existing or delete texts
* able to bulk import and export translated texts from choosen languages

## Target group
Typical users of the service are
* Writers
* Developers

are not
* translators
 

