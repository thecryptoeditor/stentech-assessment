let userInfo = [
    { 
        "userId": 1, 
        "activityType": "login", 
        "timestamp": "2024-06-14T10:00:00Z"
    },
    { 
        "userId": 1, 
        "activityType": "login", 
        "timestamp": "2024-06-14T10:00:00Z"
    },
    { 
        "userId": 2, 
        "activityType": "logout", 
        "timestamp": "2024-06-14T10:00:00Z"
    },
    { 
        "userId": 3, 
        "activityType": "kyc", 
        "timestamp": "2024-06-14T10:00:00Z"
    },
    { 
        "userId": 4, 
        "activityType": "dashboard", 
        "timestamp": "2024-06-14T10:00:00Z"
    },
    { 
        "userId": 4, 
        "activityType": "transection",
        "timestamp": "2024-06-14T10:00:00Z"
    },
    { 
        "userId": 1, 
        "activityType": "dashboard", 
        "timestamp": "2024-06-14T10:00:00Z"
    },
    { 
        "userId": 7, 
        "activityType": "dashboard", 
        "timestamp": "2024-06-14T10:00:00Z"
    },
    { 
        "userId": 6, 
        "activityType": "profile", 
        "timestamp": "2024-06-14T10:00:00Z"
    },
    { 
        "userId": 6, 
        "activityType": "settings", 
        "timestamp": "2024-06-14T10:00:00Z"
    },
    { 
        "userId": 8, 
        "activityType": "profile", 
        "timestamp": "2024-06-14T10:00:00Z"
    }
];

// Write a function to count the number of unique users.

uniqueUsers(userInfo);

function uniqueUsers(info) {
    
    let count = 0;
    
    let seen = new Set();
    
    for(item of info) {
        if(!seen.has(item.userId)) {
            seen.add(item.userId);
            count++;
        }
    }
    
    console.log('Total unique users are :', count);
    console.log('Unique user IDs are', [ ...seen])
    
}

// Write a function to find the most common activity type.

function mostFrequestNumber(userInfo) {
    
    let obj = {};
    
    for(let i = 0; i < userInfo.length; i++) {
        if(obj[userInfo[i].activityType]) {
          obj[userInfo[i].activityType]++
        }
        else {
            obj[userInfo[i].activityType] = 1; 
       }
    }
    
    let frequencyValue = 0;
    let frequencyType = null;
    
    for(let key in obj) {
        if(obj[key] > frequencyValue) {
            frequencyValue = obj[key];
            frequencyType = key;
        }
    }
    console.log('Most common activity type is', frequencyType, 'with the frequesncy', frequencyValue);
}

mostFrequestNumber(userInfo);
