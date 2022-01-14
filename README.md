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
"_id":"61de5cb57a1fa1cac63c929e",
"name":"ice kk","brand":"haagen-dazs",
"expiryDate":"2023-11-30T14:45:44.554Z,
"qty":2,
"fav":false,
"grpID":"61dd82d009f2c11b67c608e9",
"imgUrl":"https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/11576937_XL1_20210118.jpg",
"createdBy":"61dbbe796e95d333c162908a",
"createdAt":"2022-01-12T04:44:37.992Z",
"updatedAt":"2022-01-12T04:44:37.992Z",
"__v":0
}

```


## ⚙️ Back-end


### 1. User : 
- if any new user account is created, it will also created one personal group for that particular user.
- **CREATE/POST** two functions: created new member, created new group.
- **READ/GET**: get all members by custom query :
  - eg keyed in group id return profile of member who are in that group keyed in name keyword such as “yaa” will return all members profile whose name contain “yaa”
or combined both all members naming contain “yaa” in #id group
- **READ/GET**: get single member by id:
delete member function/api TBA not done, fn need to delete group record and removed items. i think we dont need delete fn at the moment. can be discussed together later.



### 2. Collection/Group :
- **CREATE/POST**:create new group, it will go to the members personal profile and add the newly created groupid. eg. abc create superABC group inviting zzz to this grp, so zzz profile be updated at the same time with new grouplist.
- **READ/GET**: get all groups by custom query (eg: by ownerID, search by groupname keyword, by membersID)
option of filter fields available eg: data return only see name and id etc
option of sort available eg naming a-z/ createdAtDate z-a = newest to oldest
- **READ/GET**: getget single group by id
- **UPDATE/PATCH**: updating group by id: any changes in member/ ownership will also leading to member profile updated.
- **DELETE**: deleting group by id. Group deleted and will update all it’s member grouping listing. so eg: superABC removed from both abc & zzz member grouplist[grpid]



### 3. Items :
- schema/model for all new item created have to be in lowercase for brand n unique name. For checking purpose: if same item with same expired date & saving to same group. will have error msg return in json format.
```javascript
{
    "status": "CONFLICT",
    "message": "Same item already exist in group."
}
```
- **READ/GET:** get all items by custom query (eg: by fav=true&name=choc&brand=meiji&createdby=memberID#&valueFilter=qty>=2&sort=name&fields=brand,expiryDate,qty,imgUrl
- **READ/GET:** get single item by id
- **UPDATE/PATCH:** update single item by id
- **DELETE**: delete single item by id
- Generally all api will return json, even if error msg also will be in json so we can use and check return status if not equal to ok then display error msg
```javascript
{
    "status": "CONFLICT",
    "message": "Name is taken, please provide another name"
}
```



## 🎨 Front-End


### Wireframes


<table><tr>
 <td>
  Landing page
</td>
 <td>
 <img src="https://github.com/siangyin/ga-p3-frontend/blob/main/readmeRef/homepage.jpg?raw=true" width="350"/>
</td>
  <td>
 <img src="https://github.com/siangyin/ga-p3-frontend/blob/main/readmeRef/loginpg.png?raw=true" width="350"/>
 <img src="https://github.com/siangyin/ga-p3-frontend/blob/main/readmeRef/homepg.png?raw=true" width="350"/>
</td>
 </tr>
  <tr>
 <td>
 Item > Show Item
</td>
 <td>
<img src="https://github.com/siangyin/ga-p3-frontend/blob/main/readmeRef/showitem.jpg?raw=true" width="350"/>
</td>
<td>
<img src="https://github.com/siangyin/ga-p3-frontend/blob/main/readmeRef/itempg.png?raw=true" width="350"/>
</td>
 </tr>
  <tr>
 <td>
 Item > Create Item
</td>
 <td>
 <img src="https://github.com/siangyin/ga-p3-frontend/blob/main/readmeRef/createitem.jpg?raw=true" width="350"/>
</td>
    <td>
<img src="https://github.com/siangyin/ga-p3-frontend/blob/main/readmeRef/newitem.png?raw=true" width="350"/>
</td>
 </tr>
  <tr>
 <td>
Item > Show Group
</td>
 <td>
 <img src="https://github.com/siangyin/ga-p3-frontend/blob/main/readmeRef/showgroup.jpg?raw=true" width="350"/>
</td>
     <td>
 <img src="https://github.com/siangyin/ga-p3-frontend/blob/main/readmeRef/collectionpg.png?raw=true" width="350"/>
</td>
 </tr>
  <tr>
 <td>
Item > Create Group
</td>
 <td>
 <img src="https://github.com/siangyin/ga-p3-frontend/blob/main/readmeRef/creategroup.jpg?raw=true" width="350"/>


</td>
       <td>
 <img src="https://github.com/siangyin/ga-p3-frontend/blob/main/readmeRef/newcollection.png?raw=true" width="350"/>
</td>
 </tr>
 
   
</table>



## ⚙️ Challenges

Team communication
- Having trouble in syncing up code base at the start of the project/ problems in communicating with team.
- We sync up our code base by having a call and make sure that everyone of us are coding on the same code base. Communication broke down but we talk it out during meetings

Coding challanges
- Had difficulty using Passport and Learning about sessions.
- Solve by researching more and asking TA about it.

Project management
- Faced challenges when delegates task, who to do, when to do, what to do.
- Schedule meeting and have regular catch-up session, always repeat and clarify to make sure everyone have the same understanding. Ask question and keep meeting minutes on what have been discussed, what's on pending, what's been finalised. 



## 💻 Technologies


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

