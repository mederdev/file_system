const db = require("../database/db");

export async function setNewValue(file: Express.Multer.File) {
	const checkValue = await db.query(`select id from meta_data where filename='${file.filename}'`);
	if (checkValue.rowCount == 0) {

		const res = await db.query(`insert into meta_data (filename,mimetype,size) values ('${file.filename}','${file.mimetype}','${file.size}')`);
		return res.command == "INSERT" ? "New item has been inserted" : "Error";
	}
	else {
		const id = checkValue.rows[0].id;
		const res = await db.query(`update meta_data set filename='${file.filename}',mimetype='${file.mimetype}',size='${file.size}' where id='${id}'`);
		return res.command == "UPDATE" ? "Item has been updated" : "Error";
	}
	// return res.command == "INSERT" ? "New value has been created" : "Error";
}

export async function getMeta() {
	const res = await db.query('select * from meta_data');
	return res.rows;
}



