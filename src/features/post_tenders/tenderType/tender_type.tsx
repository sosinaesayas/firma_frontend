<fieldset className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="flex flex-col">
  <label htmlFor="tenderType" className="text-gray-700 mb-2">
    Tender Type
  </label>
  <select
    name="tenderType"
    id="tenderType"
    className="border border-gray-300 rounded-md px-4 py-2 mb-4"
  >
    <option value="Public">Public</option>
    <option value="Limited">Limited</option>
    <option value="Expression of Interest">Expression of Interest</option>
    <option value="Direct Purchase">Direct Purchase</option>
  </select>
</div>
</fieldset>