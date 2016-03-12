# localization-microservice
Localized content on your fingertips. Or at least RESTful access to your translated texts.

## Installation
* Install [Node.js](https://nodejs.org)
* Clone this repo
* Install Express: **npm install -g express-generator**
* Run: **npm install**
* Run: **npm start**
* Browse to [http://localhost:3000](http://localhost:3000)

## Purpose
Several [l18n](https://en.wikipedia.org/wiki/Internationalization_and_localization) applications I've seen have some kind of core component attached to the product and there by also coupled to its deploy cycle. This project aim to make a localization service that is:
* small
* independent deployable
* is able to serve inserts/updates/delets of texts via REST api
* having a GUI to creat new, change existing or delete texts
* able to bulk import and export translated texts from choosen languages

## Target group
Typical users of the service are
* Writers
* Developers

Typical users of the service are **not**
* Translators

## Technology Stack
This project aim to utilize the MEAN stack.
* MongoDB
* Express
* AngularJS
* Node.js

## Collaborators
We are looking for collaborators. Have you any experience in seting up a MEAN stack we appreciate your help!
![MEAN](/img/mean-diagram.png?raw=true "")
 
