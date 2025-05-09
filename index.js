//Question 1
function FeatureToggle(featureName, isEnabled, userGroupAccess){
    this.featureName = featureName;
    this.isEnabled = isEnabled;
    this.userGroupAccess;
    this.userGroupAccess = userGroupAccess
}
FeatureToggle.prototype.canAccess = function(userRole){
    if(!this.isEnabled){
        return false;
    }
    switch(userRole){
        case "admin":
            console.log(`Get ${userRole} access`);
            break;
        case "betaTester":
            console.log(`Get ${userRole} access`);
            break;
        case "user":
            console.log(`Get${userRole} access`);
            break;
        case "guest":
            console.log(`Get ${userRole} access`);
            break;
        default:
            "Access not given"
    }
}
FeatureToggle.prototype.toggleFeature = function(flag){
    if(flag == "disabled"){
        return flag = "enabled"
    }
    else{
        return  flag = "disabled"
    }
};
const feature = new FeatureToggle("darkmode", true, ["admin", "betaTester", "guest", "user"])
feature.canAccess("admin")
console.log(feature.toggleFeature("enabled"))

//Question 2
function TimeLog(freelanceName, projectDetails, logs){
    this.freelanceName = freelanceName;
    this.projectDetails = projectDetails;
    this.logs = logs
}
TimeLog.prototype.totalEarning = function(){
    return this.logs.reduce((total, log) =>
        total + (log.hoursWorked * this.projectDetails.hourlyRate), 0
    )
};
TimeLog.prototype.filterLogsByDate = function(startDate, endDate){
    return this.logs.filter(log =>
        log.date >= startDate && log.date<= endDate
    )
};
TimeLog.prototype.exceedsWeeklyHours = function(weekStartDate){
    const weekLogs = this.filterLogsByDate(weekStartDate, new Date(weekStartDate.getTime() + 6 *24*60*60*1000))
    const totalHuors = weekLogs.reduce((sum, log) => sum + log.hoursWorked, 0);
    return totalHuors > 40;
};
const freelancer = new TimeLog("Joseph", {name: "Deliveries", hourlyRate: 70}, [{date: new Date("2026-03-20"), hoursWorked: 12}, {date: new Date("2025-03-25"), hoursWorked: 15}, {date: new Date("2025-06-20"), hoursWorked: 10}])
console.log(freelancer.totalEarning())
freelancer.filterLogsByDate()
//Question 3
function Order(customer, items, status){
    this.customer = customer;
    this.items = items;
    this.status = status
}
Order.prototype.totalCost = function(){
    return this.items.reduce((total, item) => total + (item.quantity * item.unitPrice), 0);
};
Order.prototype.updateStatus = function(payment){
    this.status = payment ? "completed" : "pending";
};
 Order.prototype.checkUrgency = function(){
    const total = this.totalCost();
    if(total > 2000){
        return "high"
    }
    else if(total > 500){
        return "medium"
    }
    else{
        return "low"
    }
 };
//Question 4
