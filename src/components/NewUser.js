import API from './API';

function postDay(userId) {
    const date =
        new Date().getMonth() +
        "-" +
        new Date().getDate() +
        "-" +
        new Date().getFullYear();
    let payload = {
        id: `${userId}`, 
        total: 0, 
        date: date, 
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0,
        11: 0,
        12: 0,
        13: 0,
        14: 0,
        15: 0,
        16: 0,
        17: 0,
        18: 0,
        19: 0,
        20: 0,
        21: 0,
        22: 0,
        23: 0
    };
    return API.post(`/day`, payload);
}

function postWeek(userId) {
    const date =
        new Date().getMonth() +
        "-" +
        new Date().getDate() +
        "-" +
        new Date().getFullYear();
    let currentDay = new Date().getDay();
    let payload = {
        id: `${userId}`, 
        total: 0, 
        date: date, 
        currentDay: currentDay,
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0
    };
    return API.post(`/week`, payload);
}

function postMonth(userId) {
    const date =
        new Date().getMonth() +
        "-" +
        new Date().getDate() +
        "-" +
        new Date().getFullYear();
    let currentDay = new Date().getDay();
    let payload = {
        id: `${userId}`, 
        total: 0, 
        date: date, 
        currentDay: currentDay,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0,
        11: 0,
        12: 0,
        13: 0,
        14: 0,
        15: 0,
        16: 0,
        17: 0,
        18: 0,
        19: 0,
        20: 0,
        21: 0,
        22: 0,
        23: 0,
        24: 0,
        25: 0,
        26: 0,
        27: 0,
        28: 0,
        29: 0,
        30: 0,
        31: 0,
    };
    return API.post(`/month`, payload);
}

function postYear(userId) {
    const currentMonth = new Date().getMonth();
    let payload = {
        id: `${userId}`, 
        total: 0, 
        currentMonth: currentMonth,
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0,
        11: 0
    };
    return API.post(`/year`, payload);
}

function postLifetime(userId) {
    let payload = { id: `${userId}`, total: 0 };
    return API.post(`/lifetime`, payload);
}

export function CreateNewUser(userId) {
    return Promise.all([postDay(userId), postWeek(userId), postMonth(userId), postYear(userId), postLifetime(userId)]);
}