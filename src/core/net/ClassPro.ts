module core.net{
    export class ClassPro{
        constructor(){}

        public recv_id:number;
        public event_id:string;
        public className:string;
        public params:Object;

        public toString():string{
            return "收到：" + this.className + " [f_id:"+ this.recv_id + ",event:" + this.event_id + ",";
        }
    }
}