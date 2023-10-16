export class wlineRequest
{
    constructor(
        private  planRental:any,
        private  planValidity:any,
        private totalData:any,
        private  voice:any,
        private  sms:any,
        private  addOnFamilySims:any,
        private  familySimData:any,
        private subscriptions:String[],
    //	@OneToMany(cascade = CascadeType.ALL)
    //	public List<Subcreption> subscriptions;
        private adminName:any,
        private status:any

    ){}
}

export class wlineResponse
{
    constructor(
        private id:any,
        private  planRental:any,
        private  planValidity:any,
        private totalData:any,
        private  voice:any,
        private  sms:any,
        private  addOnFamilySims:any,
        private  familySimData:any,
        private subscriptions:String[],
    //	@OneToMany(cascade = CascadeType.ALL)
    //	public List<Subcreption> subscriptions;
        private adminName:any,
        private status:any

    ){}
}