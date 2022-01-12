# GA - Team Project

[Web App - Demo Links](https://)

[Front Repo](https://github.com/siangyin/ga-p3-frontend)

[Backend Repo](https://github.com/Shoreasg/ShareYourKitchenLeh_Backend)


## 🌼 Introduction

The average family of four wastes 25% of their food each year. Share your kitchen leh, is an online pantry manager which help user to manage the list of item in your kitchen aiming for less wastage, cost-saving by sharing food.  



## 🚀 Features:

- Food list with tracking of quantity and expiry date: tells you when your food is going to expire so that you can use it before it's expiring.
- Photo saving: input the img url of the item for quick reference in viewing your on-hand item easily.
- Share your food: Easily invite your family members, friends or colleagues to share your food.
- Organize your food: Create spaces such as fridge, pantry, and freezer and ensure that your food is always organized and ready at the time you need them.
- Shopping List: move the food you have finished into the shopping list collection for quick reference out of the house.


## ☀️ User story:

- **Home** (landing page)

  - New user sign up : option with manual sign up form submission or with social media
  - Existing user can login to access the app.
  - Existing user can logout from the app.


```javascript

// sample user model

{
"_id": "61cd4d71d22e45187ad65bdc",
"memberName": "Siangyin",
"groupsID": [
"61cd4d71d22e45187ad65bde",
"61cdc66664687639320be32a"
],
"createdAt": "2021-12-30T06:10:57.618Z",
"updatedAt": "2021-12-31T02:56:26.967Z",
"__v": 0
},


```

- **Collections** (aka groups/category)
  - Each new account created will auto generate one personal collection.
  - User can edit collection detail.
  - User can create new collection.
  - User can invite other user to join the collection.
  - All user within the group can create and edit item within the collection.
  - Owner of the collection can add new member or delete member from accessing. 


```javascript

// sample collection/group model 

{
"_id": "61cd4d71d22e45187ad65bde",
"grpName": "SiangYin-Personal",
"imgUrl": "https://www.gemkom.com.tr/wp-content/uploads/2020/02/NO_IMG_600x600-1.png",
"members": [
"61cd4d71d22e45187ad65bdc"
],
"ownerID": "61cd4d71d22e45187ad65bdc",
"createdAt": "2021-12-30T06:10:57.637Z",
"updatedAt": "2021-12-30T06:10:57.637Z",
"__v": 0
},


```

- **Items** 
  - User can create new item and save in collection of choice, which allow it's member to view and edit the item.
  - User can view all of their items created.
  - User can view items saved in shared collection.
  - User can edit any item in shared collection.



```javascript


// sample item model

{
    "name":"ice cream - choco",
    "brand":"haagen-dazs",
    "expiryDate":"2023-11-30T14:45:44.554Z",
    "qty":2,
    "fav":false,
    "grpID":"61dd745ef93cd32e9c410746",
    "imgUrl":"https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/11576937_XL1_20210118.jpg",
    "createdBy":"61dbbe796e95d333c162908a"
}


```



## 🎨 Visual Design

### Wireframes


<table><tr>
 <td>
  Landing page
</td>
 <td>
 <img src="https://github.com/siangyin/ga-p3-frontend/blob/main/readmeRef/homepage.jpg?raw=true" width="400"/>
</td>
 </tr>
  <tr>
 <td>
 Item > Show Item
</td>
 <td>
<img src="https://github.com/siangyin/ga-p3-frontend/blob/main/readmeRef/showitem.jpg?raw=true" width="400"/>
</td>
 </tr>
  <tr>
 <td>
 Item > Create Item
</td>
 <td>
 <img src="https://github.com/siangyin/ga-p3-frontend/blob/main/readmeRef/createitem.jpg?raw=true" width="400"/>
</td>
 </tr>
  <tr>
 <td>
Item > Show Group
</td>
 <td>
 <img src="https://github.com/siangyin/ga-p3-frontend/blob/main/readmeRef/showgroup.jpg?raw=true" width="400"/>
</td>
 </tr>
  <tr>
 <td>
Item > Create Group
</td>
 <td>
 <img src="https://github.com/siangyin/ga-p3-frontend/blob/main/readmeRef/creategroup.jpg?raw=true" width="400"/>


</td>
 </tr>
  <tr>
 <td>
Item > Edit Group
</td>
 <td>
  <img src="https://github.com/siangyin/ga-p3-frontend/blob/main/readmeRef/editgroup.jpg?raw=true" width="400"/>

</td>
 </tr>
   
</table>


## ⚙️ Challenges

⓵ Ettc

- what/why
- how

⓶ Ettc

- what/why
- how

⓷ Ettc

- what/why
- how

## 💻 Technologies

Project is created with:

### Front-End
- Tailwindcss
- React


### Back-End
- Node.js
- Express, express-session
- MongoDb/Mongoose


## Setup

To run this project, install it locally using npm:

```
$ git clone
$ npm i
$ npm start

```


## Contributors


- Hakeym @hakeymmhd 
- Weilun @Shoreasg 
- SiangYin @siangyin

