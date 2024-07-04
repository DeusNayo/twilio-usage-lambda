require('dotenv').config();
const twilio = require("twilio");

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
console.log(accountSid)
console.log(authToken)

async function fetchUsageRecords() {
    const client = twilio(accountSid, authToken);
    const lastMonths = await client.usage.records.lastMonth.list({ category: "totalprice" });
  
    lastMonths.forEach((l) => console.log(l.price));
  }


fetchUsageRecords()
.then(() => {
  console.log("Usage records fetched successfully.");
})
.catch((err) => {
  console.error("Error fetching usage records:", err);
});