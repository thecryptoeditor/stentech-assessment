let userInfo = [
    {
        "userId": 1,
        "activityType": "login",
        "timestamp": "2024-06-14T10:00:00Z"
    },
    {
        "userId": 1,
        "activityType": "login",
        "timestamp": "2024-06-13T10:00:00Z"
    },
    {
        "userId": 2,
        "activityType": "logout",
        "timestamp": "2024-06-12T10:00:00Z"
    },
    {
        "userId": 3,
        "activityType": "kyc",
        "timestamp": "2024-06-11T10:00:00Z"
    },
    {
        "userId": 4,
        "activityType": "dashboard",
        "timestamp": "2024-06-10T10:00:00Z"
    },
    {
        "userId": 4,
        "activityType": "transection",
        "timestamp": "2024-06-06T6:00:00Z"
    },
    {
        "userId": 1,
        "activityType": "dashboard",
        "timestamp": "2024-06-04T10:00:00Z"
    },
    {
        "userId": 7,
        "activityType": "dashboard",
        "timestamp": "2024-06-03T10:00:00Z"
    },
    {
        "userId": 6,
        "activityType": "profile",
        "timestamp": "2024-06-02T10:00:00Z"
    },
    {
        "userId": 6,
        "activityType": "settings",
        "timestamp": "2024-05-25T10:00:00Z"
    },
    {
        "userId": 8,
        "activityType": "profile",
        "timestamp": "2024-05-20T10:00:00Z"
    }
];


// Write a function to count the number of unique users.
function uniqueUsers(userInfo) {

    let seen = new Set();

    userInfo.forEach(item => seen.add(item.userId));

    return { count: seen.size, userIds: [...seen] };
}

console.log(uniqueUsers(userInfo));


// Write a function to find the most common activity type.
function mostFrequentActivity(userInfo) {

    let activityCounts = {};

    userInfo.forEach(item => {
        activityCounts[item.activityType] = (activityCounts[item.activityType] || 0) + 1;
    });

    let mostFrequent = Object.entries(activityCounts).reduce((a, b) => a[1] > b[1] ? a : b);

    return { activityType: mostFrequent[0], frequency: mostFrequent[1] };
}

console.log(mostFrequentActivity(userInfo));


// Write a function to generate a timeline of activities for each user, sorted by timestamp.
function generateUserTimelines(userInfo) {

    let userTimelines = {};

    userInfo.forEach(activity => {

        if (!userTimelines[activity.userId]) {
            userTimelines[activity.userId] = [];
        }

        userTimelines[activity.userId].push({ activityType: activity.activityType, timestamp: activity.timestamp });
        
    });

    for (const userId in userTimelines) {
        userTimelines[userId].sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
    }

    return userTimelines;

}

console.log(generateUserTimelines(userInfo));
