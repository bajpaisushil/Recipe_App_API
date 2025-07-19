import cron from 'cron';
import https from 'https';

const job=new cron.CronJob(
    "*/14 * * * *", function(){
        https.get(process.env.API_URL, (res) => {
            if (res.statusCode === 200) {
                console.log("Recipes refreshed successfully.");
            } else {
                console.error(`Failed to refresh recipes. Status code: ${res.statusCode}`);
            }
        }).on('error', (e) => {
            console.error(`Error refreshing recipes: ${e.message}`);
        });
    }
)

export default job;
