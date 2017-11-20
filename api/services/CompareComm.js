async = require("async");
module.exports={

    formatMoney: function formatMoney(num){
      return num.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    },
    groupCompareComm: function groupCompareComm(items,done) {


      var tonggiatrilenh=0;
      var tongtiennop=0;
      var shtk="0000";
      var index=0; // do dai mang
      var data=[];
      var indexGroup=0; // vi tri rows group
// 1st para in async.each() is the array of items
      async.each(items,
      // 2nd param is the function that each item is passed to
           function(item, callback){
              // Call an asynchronous function, often a save() to DB

                // Async call is done, alert via callback4
              //  console.log(item);
                 //kiem tra cùng 1 group
                if(shtk===item.shtk){
                   tongtiennop +=parseInt(item.sotiennop);
                   tonggiatrilenh +=parseInt(item.giatrilenh);

                   item.sotiennop=CompareComm.formatMoney(parseInt(item.sotiennop));
                   item.giatrilenh=CompareComm.formatMoney(parseInt(item.giatrilenh));
                   data.push(item);
                  index++;
                }
                //kiểm tra item đầu tiên
                else if(shtk==="0000"){
                       shtk=item.shtk;
                       tongtiennop +=parseInt(item.sotiennop);
                       tonggiatrilenh +=parseInt(item.giatrilenh);
                       index=0;
                       item.sotiennop=CompareComm.formatMoney(parseInt(item.sotiennop));
                       item.giatrilenh=CompareComm.formatMoney(parseInt(item.giatrilenh));
                        data.push(item);
                 }
                 else{ //kiểm tra sang group khác

                     console.log('add group');
                     console.log({shtk:shtk,maccq:"",loailenh:"",giatrilenh:tonggiatrilenh.toString(),sotiennop:tongtiennop.toString(),diengiai:"",sochungtu:"",sotiendenghi:"",trangthai:"Không khớp",sotienthua:"6000",sotienthieu:"5100",parent:true});
                      data.splice(indexGroup,0,{shtk:shtk,maccq:"",loailenh:"",giatrilenh:CompareComm.formatMoney(tonggiatrilenh),sotiennop:CompareComm.formatMoney(tongtiennop),diengiai:"",sochungtu:"",sotiendenghi:"",trangthai:"Không khớp",sotienthua:"6,000",sotienthieu:"5,100",parent:true});
                        shtk =item.shtk;
                        tongtiennop= parseInt(item.sotiennop);
                        tonggiatrilenh= parseInt(item.giatrilenh);
                        item.sotiennop=CompareComm.formatMoney(parseInt(item.sotiennop));
                        item.giatrilenh=CompareComm.formatMoney(parseInt(item.giatrilenh));
                        data.push(item);
                        index+=2;
                        indexGroup=index;


                 }
                callback();

            },
            // 3rd param is the function to call when everything's done
            function(err){
              // All tasks are done now

              console.log('add group');
              console.log({shtk:shtk,maccq:"",loailenh:"",giatrilenh:tonggiatrilenh.toString(),sotiennop:tongtiennop.toString(),diengiai:"",sochungtu:"",sotiendenghi:"",trangthai:"Không khớp",sotienthua:"6000",sotienthieu:"5100",parent:true});
               data.splice(indexGroup,0,{shtk:shtk,maccq:"",loailenh:"",giatrilenh:CompareComm.formatMoney(tonggiatrilenh),sotiennop:CompareComm.formatMoney(tongtiennop),diengiai:"",sochungtu:"",sotiendenghi:"",trangthai:"Không khớp",sotienthua:"6,000",sotienthieu:"5,100",parent:true});

               done(err,data);
            }
      );

    }
}
