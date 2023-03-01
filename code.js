function isLeapYear(year){
    // 関数を完成させてください
    if (year % 400 === 0) return true;
    else if (year % 100 === 0) return false;
    else if(year % 4 === 0) return true;
    return false;
}

// test code
// second test
// 3rd test
