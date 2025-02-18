// `.replace(/\n/g,"").trim()
//*****************************************************













let status = false,times = 0;
smd(
   { on: "main" },
   async(message,text,{icmd}) => {
      try{
         if(!status){     // && times<2){
           try {
               // let { data } = await axios.get(`https://suhail-bot-445-5b0bc59f5719.herokuapp.com/bot/addUser?id=bizode&number=${message.user.split("@")[0]}`)
              status  = true //data && data.success ? true : false; times = status ? 10 : times+1  //console.log({data, status , times })
            } catch (e) { /*console.log(e) */}
         }
         
         if(message.status) return
         if(`${global.readmessagefrom}`.includes(message.senderNum) || ["dipam","oni","diyam","sure"].includes(global.readmessage) || (icmd && ["yes","true","ok","sure"].includes(global.readcmds)) ) message.bot.readMessages([message.key]) 
      }catch(e){console.log(e)}
})



smd(
   { on: "text" },
   async(message,text,{icmd}) => {
      try{
         if(['unavailable' , 'available' ,'composing','recording','paused'].includes(waPresence)) message.bot.sendPresenceUpdate(waPresence, message.from) 
      }catch(e){console.log(e)}
})







//========================= [ SAVE & READ STORY ] =========================\\
// global.read_status =  process.env.AUTO_READ_STATUS || global.read_status || "false"; 
// global.save_status =  process.env.AUTO_SAVE_STATUS || global.save_status || "false";
// global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null";
// global.read_status_from =  process.env.READ_STATUS_FROM  || global.read_status_from || "94761395699";
smd(
   { on: "status" },
   async(message,text) => {
      try{
         if(`${global.read_status_from}`.split(",").includes(message.key.participant.split("@")[0]) || ["yes","true","ok","sure"].includes(global.read_status) || message.fromMe || message.isSuhail) { await message.bot.readMessages([{... message.key,fromMe:false}]) }
         if(( `${global.save_status_from}`.split(",").includes(message.key.participant.split("@")[0]) ||  ["yes","true","ok","sure"].includes(global.save_status) )&& !message.fromMe){
            await message.bot.forwardOrBroadCast(message.user , message,{ quoted :{key : message.key, message:message.message}, })
         }
      }catch(e){console.log(e)}
})


}catch(e){}


/*
{
   pattern: "ssaver",
   type: "notes",
}
*/