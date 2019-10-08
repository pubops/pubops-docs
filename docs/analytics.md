---
id: analytics
title: Analytics
---

Some features in Pubops require a Google Analytics connection. Currently these features are:

- Media kit.
- Geo-targeting for CPD (cost per day) ad slots without ad server connection.

## Connect Google Analytics account

1. To connect your GA account head over to [Analytics](https://pubops.io/publisher/analytics) and click **Enable**.
2. A new screen will open where you need to login to your GA account.
3. You might be presented with a warning screen that says "This app isn't verified". Don't be alarmed. This is happening because we are still in beta version and Google has not finished their verification procedure. We assure you that we follow strict practices when it comes to your data and request the most minimal amount of information required for us to provide you with the service. To continue, click **Advanced** and then click on **Go to pubops.io (unsafe)**.
4. You will be presented with a screen where we request access to certain data. Please review presented information and click **Allow**.
5. You can now carry on to mapping GA views to your Pubops properties as described in the next section.

## Map Google Analytics views to Pubops properties

Before you can map Google Analytics views to Pubops properties make sure you have at least one property in your GA account and at least one [property in Pubops](properties.md). To make a connection between the two all you have to do is select GA view that corresponds to each property. If you don't want to enable GA for certain properties then select **Disabled** from the list. Once the connection is made Pubops will periodically fetch GA data so that it stays up to date.
