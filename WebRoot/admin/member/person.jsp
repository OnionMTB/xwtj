<%@ page language="java" import="java.util.*"  contentType="text/html;charset=gb2312"%>
<jsp:useBean id="mb" scope="page" class="com.bean.MemberManageBean" />
<jsp:useBean id="sn" scope="page" class="com.bean.SystemBean" /> 
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
String dir=sn.getDir();
%>
<HTML><HEAD><TITLE>��̨������</TITLE>
<LINK href="<%=basePath %><%=dir %>/images/Admin_Style.css" type=text/css rel=stylesheet>
<LINK href="<%=basePath %><%=dir %>/images/style.css" type=text/css rel=stylesheet>
<SCRIPT language=JavaScript src="<%=basePath %><%=dir %>/images/Common.js"></SCRIPT>
<SCRIPT language=JavaScript src="<%=basePath %><%=dir %>/images/calendar.js"></SCRIPT>
<STYLE type=text/css>
BODY {
	MARGIN-LEFT: 0px; BACKGROUND-COLOR: #ffffff
}
.STYLE1 {color: #ECE9D8}
</STYLE>
</HEAD>
<script  language="javascript" >
function top(){
   	form3.action="<%=basePath%><%=dir %>/member/person.jsp?page=1";
    form3.submit();
}
function last(){
    if(form3.pageCount.value==0){//�����ҳ��Ϊ0����ô���һҳΪ1��Ҳ���ǵ�һҳ�������ǵ�0ҳ
    form3.action="<%=basePath%><%=dir %>/member/person.jsp?page=1";
    form3.submit();
	}else{
	form3.action="<%=basePath%><%=dir %>/member/person.jsp?page="+form3.pageCount.value;
    	form3.submit();
	}
}
function pre(){
  var page=parseInt(form3.page.value);
  if(page<=1){
    alert("������һҳ");
  }else{
    form3.action="<%=basePath%><%=dir %>/member/person.jsp?page="+(page-1);
    form3.submit();
  }
}

function next(){
  var page=parseInt(form3.page.value);
  var pageCount=parseInt(form3.pageCount.value);
  if(page>=pageCount){
    alert("�������һҳ");
  }else{
    form3.action="<%=basePath%><%=dir %>/member/person.jsp?page="+(page+1);
    form3.submit();
  }
}
function bjump(){
  	var pageCount=parseInt(form3.pageCount.value);
  	if( fIsNumber(form3.busjump.value,"1234567890")!=1 ){
		alert("��ת�ı�����ֻ����������!");
		form3.busjump.select();
		form3.busjump.focus();
		return false;
	}
	if(form3.busjump.value>pageCount){//�����ת�ı����������ҳ���������һҳ���������������һҳ
	  if(pageCount==0){	
	  form3.action="<%=basePath%><%=dir %>/member/person.jsp?page=1";
	  form3.submit();
	}
	else{
		form3.action="<%=basePath%><%=dir %>/member/person.jsp?page="+pageCount;
		form3.submit();
	}
}
else if(form3.busjump.value<=pageCount){
var page=parseInt(form3.busjump.value);
   if(page==0){
      page=1;//������������0����ô����������1
      form3.action="<%=basePath%><%=dir %>/member/person.jsp?page="+page;
      form3.submit();
   }else{
      form3.action="<%=basePath%><%=dir %>/member/person.jsp?page="+page;
      form3.submit();
   }

}

}
//****�ж��Ƿ���Number.
function fIsNumber (sV,sR){
var sTmp;
if(sV.length==0){ return (false);}
for (var i=0; i < sV.length; i++){
sTmp= sV.substring (i, i+1);
if (sR.indexOf (sTmp, 0)==-1) {return (false);}
}
return (true);
}

function del()
{
	pageform.submit();
}
function search()
{
	if(document.sform.id.value.replace(/\s+$|^\s+/g,"").length<=0&&document.sform.name.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("�������ѯ������ID���߻�Ա����");
		document.sform.id.focus();
		return false;
	}
	sform.submit();
}
function ts()
{
	if(document.sform.stime.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("��������ʼʱ�䣡");
		document.sform.stime.focus();
		return false;
	}
	if(document.sform.etime.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("�������ֹʱ�䣡");
		document.sform.etime.focus();
		return false;
	}
	document.sform.method.value="TIMESEARCH";
	sform.submit();
}
</script>
<%
String message = (String)request.getAttribute("message");
	if(message == null){
		message = "";
	}
	if (!message.trim().equals("")){
		out.println("<script language='javascript'>");
		out.println("alert('"+message+"');");
		out.println("</script>");
	}
	request.removeAttribute("message");
%>
<%
	String username=(String)session.getAttribute("user");
	if(username==null){
		response.sendRedirect(basePath+"/error.jsp");
	}
	else{
%>
<BODY >
<TABLE cellSpacing=0 cellPadding=0 width="100%" border=0>
  <TBODY>
  <TR>
    <TD align="left" vAlign=top >
<form action="<%=basePath %>MemberManage?method=DELMEMBER" method="post" name="pageform">
       <TABLE width="100%" border=0 align="center" cellPadding=3 cellSpacing=1 class=tablewidth>
		  <TBODY>
		  <TR align="center" class=head>
			<TD height=23>���</TD>
			<TD>��Ա��</TD>
			<TD>ע��ʱ��</TD>
			<TD>��½����</TD>
			<TD>�ϴε�½ʱ��</TD>
			<TD>�ϴε�½IP</TD>
			<TD>״̬</TD>
			<TD>ɾ��</TD>
		  </TR>
		<%
			mb.setEVERYPAGENUM(10);
			int cou = mb.getMessageCount();//�õ���Ϣ����			        
			String page1=request.getParameter("page");
			if(page1==null){
				page1="1";
			}
			session.setAttribute("busMessageCount", cou + "");
			session.setAttribute("busPage", page1);
			List pagelist1 = mb.getMessage(Integer.parseInt(page1)); //����һ��ҳ���������ظ�ҳ��Ҫ��ʾ����Ϣ 
			session.setAttribute("qqq", pagelist1);
			int pageCount = mb.getPageCount(); //�õ�ҳ��  
			session.setAttribute("busPageCount", pageCount + ""); 
			List pagelist3=(ArrayList)session.getAttribute("qqq");
			 
				for(int i=0;i<pagelist3.size();i++){
					List pagelist2 =(ArrayList)pagelist3.get(i);
			%>   
		  <TR align="center" bgColor=#ffffff>
		    <TD id=map><%=i+1 %></TD>
			<TD id=map>
			<a title="����鿴��ϸ��Ϣ" href="javascript:" onclick="window.showModelessDialog('<%=basePath+dir %>/member/pminfo.jsp?id=<%=pagelist2.get(0).toString()%>','newwin','dialogHeight:400px;   dialogWidth:   600px;   dialogTop:0px;   dialogLeft:   5px;   edge:   Raised;   center:   Yes;   help:   Yes;   resizable:   Yes;   status:yes;');">					
			<%=pagelist2.get(1).toString() %>
			</a>
			</TD>
			<TD id=map><%=pagelist2.get(2).toString() %></TD>
			<TD id=map><%=pagelist2.get(4).toString() %></TD>
			<TD id=map><%=pagelist2.get(5).toString() %></TD>
			<TD id=map><%=pagelist2.get(6).toString() %></TD>
			<TD id=map><a href="<%=basePath%>MemberManage?method=CLOSE&id=<%=pagelist2.get(0).toString()%>">
			<%if(Integer.parseInt(pagelist2.get(3).toString())==1){%><font color=blue>����</font><%}else{%><font color=red>����</font><%} %>
			</a></TD>
			<TD id=map><a href="<%=basePath%>ComServlet?method=delMember&id=<%=pagelist2.get(0).toString()%>">ɾ��</a></TD>
		  </TR>
		<%}%>    	
		  
		  </TBODY>
      </TABLE></form>
       </TD>
		</TR>
	     <TR>
    	   <TD align="right" vAlign=top >
             <TABLE width="100%" border=0 align="right" cellPadding=3 cellSpacing=1>
		     <TBODY>
		     <TR align="right" class=head>
			 <TD >
			 <form action="" method="post" name="form3">	
			 <input type="hidden" name="pageCount" value="<%= session.getAttribute("busPageCount").toString()%>" /><!--//���ڸ�����javascript��ֵ-->
			 <input type="hidden" name="page" value="<%=session.getAttribute("busPage").toString()%>" /><!--//���ڸ�����javascript��ֵ-->         
							<a href="#" onClick="top()"><img src="<%=basePath %>images/first.gif" border="0" /></a>&nbsp;&nbsp;&nbsp;
				<a href="#" onClick="pre()"><img src="<%=basePath %>images/pre.gif" border="0" /></a>&nbsp;&nbsp;&nbsp;
				 ��<%=session.getAttribute("busMessageCount").toString()%>����¼,����<%=session.getAttribute("busPageCount").toString()%>ҳ,��ǰ��<%=session.getAttribute("busPage").toString()%>ҳ&nbsp;&nbsp;&nbsp;
				<a href="#" onClick="next()"><img src="<%=basePath %>images/next.gif" border="0" /></a>&nbsp;&nbsp;&nbsp;
				<a href="#" onClick="last()"><img src="<%=basePath %>images/last.gif" border="0" /></a>
			 ��<input name="busjump" type="text" size="3" />ҳ<a href="#" onClick="bjump()"><img src="<%=basePath %>images/jump.gif" border="0" /></a>&nbsp;&nbsp;&nbsp;
			 </form>
             </TD>
             </TR>
			 </TBODY>
			 </TABLE>
		  </TD>
		</TR>
		 
  </TBODY>
</TABLE>
</BODY>
<%} %>
</HTML>
