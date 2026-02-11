export type ResponseFormate = {
    status:Number,
    message:String,
    data:any[]
}

export class ResposeBuilder{
    private status:Number;
    private message:String;
    private data:any[] = []

    constructor(
      status:Number,
      message:String,
      data:any[]
    ){
        this.status = status,
        this.message = message,
        this.data = data
    }

    build():ResponseFormate{
        return{
            status:this.status,
            message:this.message,
            data:this.data
        }
    }

    static Sucess(status:Number,message:String,data:any[]):ResponseFormate{
        return new ResposeBuilder(status,message,data).build()
    }

    static Failur(status:Number,message:String,data:any[]):ResponseFormate{
        return new ResposeBuilder(status,message,data).build()
    }

}