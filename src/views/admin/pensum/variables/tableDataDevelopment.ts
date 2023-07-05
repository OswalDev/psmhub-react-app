type RowObj = {
	code: string;
	subject: string;
	th: number;
	ph: number;
	lh: number;
	ht: number;
	prelation: Array<string>;
  };

const tableDataComplex: RowObj[] = [
	{
		code: "4701141",
		subject: "Matematica II",
		th: 10,
		ph: 3,
		lh: 4,
		ht: 1,
		prelation: ["Matematica I"]
	},
];
export default tableDataComplex;
