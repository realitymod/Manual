## ![](assets/PR_v1_Logo.png)

## **Project Reality: BF2 Manual**

Project Reality: BF2 has been in development by countless developers over a period of more than 15 years. Extensive modifications and improvements were made during this time. After thousands of changes, it gets harder and harder to recognize that PR is a Battlefield 2 modification. We hope this manual provides you with a good start into the challenging world of PR:BF2. If you have any feedback or unanswered questions concerning this document feel free to contact us on the forums.

### **Want to help with community translation? Visit** [**this thread**](https://www.realitymod.com/forum/showthread.php?t=75501) **on our forums.**



## Building and testing
This requires installing Node-JS, npm and getting honkit, a fork of gitbook:  `npm install honkit --save-dev`
 - Install plugins: `npx honkit init`
 - Build: `npx honkit build`
 - Host locally (available on localhost:4000): `npx honkit serve`

If you get errors during building related to the reality-theme plugin execute the following commands before building:
```
cd ./packages/reality-theme
npm link
cd ../..
npm link honkit-plugin-reality-theme
```

## Translation credits
- German: Rotblut
- Brazilian Portuguese: Mordekay
- Indonesia: PRID-TEAM
- Spanish: isaias43
