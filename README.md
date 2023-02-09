# React Native App for Github User Profiles

## Platforms Supported
- iOS - [Demo](https://github.com/harshit2996/react-native-github-users/blob/master/demo_images_%26_screenshots/ios/rn_gu_ios.gif)
- Android - [Demo](https://github.com/harshit2996/react-native-github-users/blob/master/demo_images_%26_screenshots/android/rn_gu_android.gif)

  <table>
    <tr>
    <td>
    <img src="demo_images_%26_screenshots/ios/rn_gu_ios.png" alt="iOS app" title="iOS app" style="height: 480px; width: auto;">
    </td>
    <td>
      <img src="demo_images_%26_screenshots/android/rn_gu_android.png" alt="iOS app" title="iOS app" style="height: 480px; width:240px;">
    </td>
    <tr>
    <td>
    <div style="text-align: center">iOS app</div>
    </td>
    <td>
    <div style="text-align: center">android app</div>
    </td>
    </tr>
  </table>
The main screens / views are - 
  - Github User Search Screen
    - It displays the Search Bar component to input username
    - The screen also has a User Not Found view which gets displayed when a search is executed & there is no user with the provided username
    
    <table>
      <tr>
      <td>
      <img src="demo_images_%26_screenshots/ios/rn_gu_home_ios.png" alt="iOS Home Screen" title="iOS Home Screen" style="height: 480px; width:auto;">
      </td>
      <td>
      <img src="demo_images_%26_screenshots/android/rn_gu_home_android.png" alt="iOS Home Screen" title="iOS Home Screen" style="height: 480px;width:auto;">
      </td>
      </tr>
      <tr>
      <td>
      <div style="text-align: center">iOS Home Screen</div>
      </td>
      <td>
      <div style="text-align: center">android Home Screen</div>
      </td>
      </tr>
    </table>

  - Profile Screen
    - This screen displays a Profile Card component with user details, when a user's profile is found from the search screen or is navigated to - from the Followers/Following screen

    <table>
      <tr>
      <td>
      <img src="demo_images_%26_screenshots/ios/rn_gu_profile_ios.png" alt="iOS Profile Screen" title="iOS Profile Screen" style="height: 480px; width:auto;">
      </td>
      <td>
      <img src="demo_images_%26_screenshots/android/rn_gu_profile_android.png" alt="iOS Profile Screen" title="iOS Profile Screen" style="height: 480px; width:auto;">
      </td>
      </tr>
      <tr>
      <td>
      <div style="text-align: center">iOS Profile Screen</div>
      </td>
      <td>
      <div style="text-align: center">android Profile Screen</div>
      </td>
      </tr>
    </table>
  
  - Followers Screen
    - Displays the list of followers. When a follower on the list is tapped, the app navigates to the Profile Screen which then displays the profile data of the follower

    <table>
      <tr>
      <td>
      <img src="demo_images_%26_screenshots/ios/rn_gu_followers_ios.png" alt="iOS Followers Screen" title="iOS Followers Screen" style="height: 480px; width:auto;">
      </td>
      <td>
      <img src="demo_images_%26_screenshots/android/rn_gu_followers_android.png" alt="iOS Followers Screen" title="iOS Followers Screen" style="height: 480px; width:auto;">
      </td>
      </tr>
      <tr>
      <td>
      <div style="text-align: center">iOS Followers Screen</div>
      </td>
      <td>
      <div style="text-align: center">android Followers Screen</div>
      </td>
      </tr>
    <table>

  - Following Screen
    - Same as Followers Screen but with list of users, the selected (searched) user is following

    <table>
      <tr>
      <td>
      <img src="demo_images_%26_screenshots/ios/rn_gu_following_ios.png" alt="iOS Following Screen" title="iOS Following Screen" style="height: 480px; width:auto;">
      </td>
      <td>
      <img src="demo_images_%26_screenshots/android/rn_gu_following_android.png" alt="iOS Following Screen" title="iOS Following Screen" style="height: 480px; width:auto;">
      </td>
      </tr>
      <tr>
      <td>
      <div style="text-align: center">iOS Following Screen</div>
      </td>
      <td>
      <div style="text-align: center">android Following Screen</div>
      </td>
      </tr>
    </table>

## Components

There are two main components -

1. Profile Card - It shows the information for the searched / selected user. The information comprises of the following -
   - Avatar
   - Username
   - Name
   - Bio / Decription
   - Follower Count
   - Following Count
   
      <space>

    If the follower/following `count > 0` , then the counts/numbers are clickable & when clicked/tapped, the app navigates to the corresponding - followers / following View to display the list of such users.

2. Follow List - Flatlist Component which takes in the url of the follower/followers and displays the list of such users with their username & avatar
    - Implemented Infinite Scrolling - The flatlist initially loads only 3 followers/following users. As the scroll is about to reach the end of list, the api is recalled to load the next set of users which then get appended to the existing list.\
    <space>\
    The  number of users loaded per page can be changed by updating `per_page` prop of the Flatlist

   - Implemented Pull to Refresh in the Flatlist

## Packages & Libraries used 
Here is the list of main packages & libraries used -
  - react-native-paper
  - react-navigation
  - react-native-svg
  - react-native-vector-icons
  - axios

## API & Endpoints
- API base URL: - `https://api.github.com`
- Endpoints: -
  1. `/users/{username}`
  2. `/users/{username}/followers`
  3. `/users/{username}/following`

