export class business
{
    constructor(
        
        private plan:any,
        private highSpeedInt:any[],
       private voice:any[],
       private productivity:any[],
       private conferencing:any[],
       private devices:any[],
       private data:any[],
       private payType:any[],
       private offer:any,
       private adminName:any,
    private Status:any
    ){}
}

export let  bList:business[]=[new business("3999",["Download = Upload Speed - 1 Gbps","Speed post FUP - 2Mbps", "Static IP-yes"],
["IP Centrex Lines-4","Parallel Ringing-yes"],["Attendance Licenses-20"],["Meet Licenses-2"],["Digital First Business membership-yes","Business Gateway -Business Gateway (Wi-Fi ONT Router)","Voice Gateway	Voice Gateway (IAD) for IP Centrex voice lines"]
,["Quarterly: 13500 GB",
"Half-yearly: 27000 GB",
"Annual: 54000 GB"],["Monthly-3999","Quarterly-12,300","Half Yearly-22,090"],
"Toll-Free Number Service	Special discounted price offer of ₹299 per month for first six months","","Not-Approved"
)]