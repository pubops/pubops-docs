---
id: ad-servers
title: Ad Servers
---

Setting up orders, line items and creatives in your ad server can be a tedious part of the sales process. Luckily with Pubops we can automate it for you. Currently we support only Google Ad Manager (formerly known as DFP) but other ad servers are on our roadmap as well.

## Connecting Google Ad Manager

To connect your Google Ad Manager (GAM) account to your Pubops account head over to [Ad Servers](https://pubops.io/publisher/ad-servers) and click on "Enable". You will be redirected to another page where you will have to login to your GAM account and then grant permission to Pubops to manage your GAM campaigns. Make sure you click "Allow" on that screen.

Once you are redirected back to Pubops you will be presented with a select box to choose which GAM network you want to connect to (in case you have multiple ad networks under your GAM account). Currently Pubops supports only one GAM network connection per account. If you need support for multiple GAM networks per account please let us know.

In case you need to connect GAM network that belongs to another GAM account you will have to disable existing connection and make a new one.

:::caution
If you disable existing Google Ad Manager connection, all line items that are served by it won't function correctly. Technically they will continue delivering but you will lose automation and your advertisers might experience problems with self-service. Thus it is strongly recommended not to do so if you have any running orders that are served by GAM.
:::