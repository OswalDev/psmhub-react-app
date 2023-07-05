import tableDataDevelopment from "./variables/tableDataDevelopment";
import tableDataCheck from "./variables/tableDataCheck";
import CheckTable from "./components/CheckTable";
import tableDataColumns from "./variables/tableDataColumns";
import tableDataComplex from "./variables/tableDataComplex";
import DevelopmentTable from "./components/DevelopmentTable";
import ColumnsTable from "./components/ColumnsTable";
import ComplexTable from "./components/ComplexTable";

const Pensum = () => {
  return (
    <div>
      <div className="mt-5 grid h-full w-full gap-5">
        <DevelopmentTable tableData={tableDataDevelopment} />
      </div>
    </div>
  );
};

export default Pensum;
