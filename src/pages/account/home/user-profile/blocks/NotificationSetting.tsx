import React, { useState } from "react";

const NotificationSetting = () => {
  const [emailNoti, setEmailNoti] = useState(true);
  const [smsNoti, setSmsNoti] = useState(false);
  const [pushNoti, setPushNoti] = useState(true);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Notification Preferences:", {
      email: emailNoti,
      sms: smsNoti,
      push: pushNoti,
    });
  };

  return (
    <div className="card min-w-full">
      <div className="card-header">
        <h3 className="card-title">Notification Settings</h3>
      </div>

      <div className="card-body">
        <form onSubmit={handleSave} className="flex flex-col gap-4">
          <label className="flex items-center justify-between">
            <span>Email Notifications</span>
            <input
              type="checkbox"
              checked={emailNoti}
              onChange={(e) => setEmailNoti(e.target.checked)}
            />
          </label>

          <label className="flex items-center justify-between">
            <span>SMS Notifications</span>
            <input
              type="checkbox"
              checked={smsNoti}
              onChange={(e) => setSmsNoti(e.target.checked)}
            />
          </label>

          <label className="flex items-center justify-between">
            <span>Push Notifications</span>
            <input
              type="checkbox"
              checked={pushNoti}
              onChange={(e) => setPushNoti(e.target.checked)}
            />
          </label>

          <button type="submit" className="btn btn-primary w-fit mt-2">
            Save Preferences
          </button>
        </form>
      </div>
    </div>
  );
};

export { NotificationSetting };
