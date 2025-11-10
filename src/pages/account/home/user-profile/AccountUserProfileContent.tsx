import {
  BasicSettings,
  PersonalInfo,
  ManageServiceProfile,
  ManageKycDocs
} from './blocks';

const AccountUserProfileContent = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 lg:gap-7.5">
      <div className="col-span-1">
        <div className="grid gap-5 lg:gap-7.5">
          <PersonalInfo />
           <ManageServiceProfile />
           <ManageKycDocs />
        </div>
      </div>

      <div className="col-span-1">
        <div className="grid gap-5 lg:gap-7.5">
          <BasicSettings title="Basic Settings" />
        </div>
      </div>
    </div>
  );
};

export { AccountUserProfileContent };
