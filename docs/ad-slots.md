---
id: ad-slots
title: Ad Slots
---

Ad slots represent inventory of actual ad spaces or ad products that you sell. Depending on type of media where this ad slot is located these could be anything like banners, pre-roll, sponsored post, radio ad break, physical billboard, etc. Each ad slot contains important information such as its name, property to which it belongs, pricing information together with type and size of the creative.

:::note
Currently we support only standard digital banner ads with image or third party creatives.
:::

Ad slots can be connected to an ad server for automatic trafficking and availability forecasting. Currently only Google Ad Manager (DFP) is supported.

## Create an ad slot

1. To create an ad slot head over to [Ad Slots](https://pubops.io/publisher/adslots/list) and click on **Create** button.
2. Select **Property** to which this ad slot belongs to.
3. Enter **Name** of the ad slot. It's important to make it descriptive for your buyers. An example of good name could be something like *"Homepage Leaderboard ATF"*.
4. Enter **Description** *(optional)*. This can have any extra information that can be helpful to your buyers.
5. Enter **Size** of your ad slot in pixels (example: 300x250). Currently we don't support multi-sized ad slots, instead you would need to create multiple ad slots with different sizes.
6. Select **Ad server**:
    - **Google Ad Manager (formerly DFP)** – select this if you want to traffick this ad slot to your GAM network. If you don't see this option it means you did not [connect your GAM account to Pubops](ad-servers.md).
    - **None** – select this if you use any other ad server or serve your ads through any other means. With this selected you will have to provide estimated number of monthly impressions available. For delivery reporting you can use our impression tracking pixels and click-through tracking urls or opt to supply by manual input.
7. Select **Ad unit in GAM** *(GAM only)* to which this ad slot is trafficked to in GAM. If you don't see your ad units in the list you can press on **Refresh ad units list** to reload list of ad units from GAM.
8. Upload **Screenshot of ad slot** *(optional)* if you want to make it easier for buyers to understand what they are buying.
9. Enter **Estimate impressions available per month** *(without ad server only)* if your ad slot is not connected to an ad server. For ad slots that are connected to an ad server we get this information from ad server's reporting services automatically.
10. Select **Pricing model** from the list:
    - **CPM**: cost per thousand impressions. CPM ad slots are trafficked as standard fixed quantity campaigns.
    - **CPD**: cost per day. CPD ad slots are trafficked as 100% SOV (share of voice) sponsorship campaigns. Setting custom SOV is on our roadmap.
11. Enter **Base price** for this unit. Base price is the price of the ad slot without any custom targeting applied.
12. Select **Allow geo-targeting by country** *(optional)* if you want buyers to be able to target this ad slot to specific countries.
13. Select **Limit geo-targeting to specified countries** *(optional)* if you want to allow geo-targeting by countries only from the list of countries you've supplied as opposed to all countries of the world.
14. Enter **Default price modifier** that will be applied to base price as a premium for geo-targeting to any country not explicitly defined in the geo-targeting table.
15. Click on **Choose country** to add any country to the geo-targeting table. You can specify price modifier for each country if needed. To remove any country from the list just click the remove icon next to the item.

    :::tip
    Price modifiers come in two flavors. They can set relative to base price in percentage or they can be set to a fixed price, effectively overwriting base price with new value. Relative values can be negative if modified price needs to be lower than base price. In all cases though final price after modifier has been applied must be greater than 0.
    :::

16. Select **Don't show this ad slot in rate card** *(optional)* if you want to hide this ad slot from your public rate card. As an example this could be useful for special ad slots that are sold to specific clients.