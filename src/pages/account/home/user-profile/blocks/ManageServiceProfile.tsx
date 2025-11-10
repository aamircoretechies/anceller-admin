import { KeenIcon } from '@/components';

const ManageServiceProfile = () => {
  return (
    <div className="card min-w-full">
      {/* Header */}
      <div className="card-header">
        <h3 className="card-title">Manage Service Profile</h3>

        <div className="flex items-center gap-2">
          <button className="btn btn-sm btn-light">
            <KeenIcon icon="plus" /> Add Service
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="card-table scrollable-x-auto pb-3">
        <table className="table align-middle text-sm text-gray-500">
          <tbody>
            {/* Service Name */}
            <tr>
              <td className="py-2 min-w-36 text-gray-600 font-normal">Service Name</td>
              <td className="py-2 text-gray-800 font-normal">Electrical Installation</td>
              <td className="py-2 text-end">
                <a href="#" className="btn btn-sm btn-icon btn-clear btn-primary">
                  <KeenIcon icon="notepad-edit" />
                </a>
              </td>
            </tr>

            {/* Category */}
            <tr>
              <td className="py-2 text-gray-600 font-normal">Category</td>
              <td className="py-2 text-gray-800 font-normal">Electrical</td>
              <td className="py-2 text-end">
                <a href="#" className="btn btn-sm btn-icon btn-clear btn-primary">
                  <KeenIcon icon="notepad-edit" />
                </a>
              </td>
            </tr>

            {/* Experience */}
            <tr>
              <td className="py-2 text-gray-600 font-normal">Experience</td>
              <td className="py-2 text-gray-800 font-normal">5 Years</td>
              <td className="py-2 text-end">
                <a href="#" className="btn btn-sm btn-icon btn-clear btn-primary">
                  <KeenIcon icon="notepad-edit" />
                </a>
              </td>
            </tr>

            {/* Service Description */}
            <tr>
              <td className="py-3 text-gray-600 font-normal">Description</td>
              <td className="py-3 text-gray-800 font-normal">
                Expert in residential plumbing and water system repair.
              </td>
              <td className="py-3 text-end">
                <a href="#" className="btn btn-sm btn-icon btn-clear btn-primary">
                  <KeenIcon icon="notepad-edit" />
                </a>
              </td>
            </tr>

            {/* Portfolio */}
            <tr>
              <td className="py-3 text-gray-600 font-normal">Portfolio / Files</td>
              <td className="py-3 text-gray-800 font-normal">
                <span className="text-primary cursor-pointer">View Uploaded Files</span>
              </td>
              <td className="py-3 text-end">
                <a href="#" className="btn btn-sm btn-icon btn-clear btn-primary">
                  <KeenIcon icon="upload" />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { ManageServiceProfile };
