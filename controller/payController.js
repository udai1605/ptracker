const parttimeModel = require("../models/parttimeModel");
const timeModel = require("../models/timeModel");

module.exports ={
    addPayout: async(req,res,next)=>{
        const { parttimeID, periodStart, periodEnd } = req.body;
        try {
            // Fetch all part-time jobs for the user
            const parttimeData = await parttimeModel.findById(parttimeID);
            let BIWEEKLY_HOURS_THRESHOLD= parttimeData?.maxHoursPerCheque
            let totalCreditHoursAdjustment = 0;
        
            
            // Fetch time entries for each part-time job within the period
            const timeEntries = await timeModel.find({
            user_id: parttimeData?.user_id,
            parttime_id: parttimeID,
            date: { $gte: new Date(periodStart), $lte: new Date(periodEnd) }
            });
    
            const totalHoursWorked = timeEntries.reduce((sum, entry) => sum + parseFloat(entry.shift_hours), 0);
    
            if (totalHoursWorked > BIWEEKLY_HOURS_THRESHOLD) {
            totalCreditHoursAdjustment += totalHoursWorked - BIWEEKLY_HOURS_THRESHOLD;
            }
            
        
            // Update the user's credit hours (you might want to handle negatives differently)
            // const user = await userModel.findById(userId);
            const updatedCreditHours = parttimeData.credit_hours + totalCreditHoursAdjustment;
            await parttimeModel.findByIdAndUpdate(parttimeID, { credit_hours: updatedCreditHours });
        
            res.status(200).json({ message: "Payout calculated successfully", credit_hours: updatedCreditHours });
          } catch (error) {
            res.status(500).json({ message: "Error calculating payout", error });
          }
    }
}