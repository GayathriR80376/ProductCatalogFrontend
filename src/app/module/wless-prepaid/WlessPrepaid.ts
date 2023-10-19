export class WlessPrepaid
{
    constructor(public id:any,public planValue:String,public planvalidity:String,public totaldata:String,public dataperday:String,public voice:String,public sms:String,public subscriptions:String[],public adminName:String,public status:String)
    {

    }
}
export class WlinePrepaid
{
    constructor(public planValue:String,public planValidity:String,public speed:String,public data:String,public voice:String,public subscription:any[],public otherFeatures:String[],public category:String,public adminName:String,public status:String)
    {

    }
}
export class WlinePrepaidRequest
{
    constructor(public id:any,public planValue:String,public planValidity:String,public speed:String,public data:String,public voice:String,public subscription:any[],public otherFeatures:String[],public category:String,public adminName:String,public status:String)
    {

    }
}
export class Subscription
{
    constructor(public productName:String){}
}
// export let prepaidlist:WlinePrepaid[]=[new WlinePrepaid('399','28 days','20GB','1 GB per day','unlimited','unlimitted',[{productName:["Amazon","netflix"]}],'Admin001Procat','Not-Approved')];

export class WlessPrepaidRequest
{
    constructor(public planValue:String,public planvalidity:String,public totaldata:String,public dataperday:String,public voice:String,public sms:String,public subscriptions:String[],public adminName:String,public status:String)
    {

    }
}

export let subproducts:Subscription[]=[new Subscription("Amazon"),
                                       new Subscription("Netflix(Basic)"),
                                       new Subscription("Jio cinema"),
                                       new Subscription("Wynk"),
                                       new Subscription("Spotify"),
                                       new Subscription("Disney+Hotstar"),
                                       new Subscription("Airtel Xtream"),
                                       new Subscription("Sun Nxt"),
                                       new Subscription("Zee5"),]