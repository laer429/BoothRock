package com.multi.FM.manager;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data

public class ReportVO {
	private int report_no;
	private int booth_no;
	private int fstv_no;
	private int report_lie;
	private int report_check;
	private String booth_name;
	private String fstv_title;
	private String user_id;
	private String report_date;
	private String report_title;
	private String report_comment;
	private String seller_id;
	
}
