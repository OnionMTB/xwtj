//
function ResumeError()
 {
        return true;
    }
window.onerror = ResumeError;

//��֤ϵͳ��������
function checksite()
{
	if(document.form1.sitename.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("��������վ���ƣ�");
		document.form1.sitename.focus();
		return false;
	}
	if(document.form1.url.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("��������վ��ַ��");
		document.form1.url.focus();
		return false;
	}
	if(document.form1.keyword.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("�����������ؼ��֣�");
		document.form1.keyword.focus();
		return false;
	}
	if(document.form1.description.value.replace(/\s+$|^\s+/g,"").length<=0)
   	{
   		alert("��������վ˵����");
       	document.form1.description.focus();
      	return false;  
   	}
	if(document.form1.email.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("���������Ա���䣡");
		document.form1.email.focus();
		return false;
	}
	if(!/(\S)+[@]{1}(\S)+[.]{1}(\w)+/.test(document.form1.email.value)) 
    {
        alert("�������ʽ��ȷ�� e-mail ��ַ��");
        document.form1.email.focus();
        return false;         
    }
    if(document.form1.reasons.value.replace(/\s+$|^\s+/g,"").length<10||document.form1.reasons.value.replace(/\s+$|^\s+/g,"").length>1000)
   	{
   		alert("��������վ�ر�ԭ��������10-1000���ַ�֮�䣡");
       	document.form1.reasons.focus();
      	return false;  
   	}
    if(document.form1.dir.value.replace(/\s+$|^\s+/g,"").length<=0)
   	{
   		alert("�������̨����Ŀ¼��");
       	document.form1.dir.focus();
      	return false;  
   	}
   	if(document.form1.record.value.replace(/\s+$|^\s+/g,"").length<=0)
   	{
   		alert("��������վ�����ǼǺţ���δ�����������д:������");
       	document.form1.record.focus();
      	return false;  
   	}
   	if(document.form1.copyright.value.replace(/\s+$|^\s+/g,"").length<=0||document.form1.copyright.value.replace(/\s+$|^\s+/g,"").length>1000)
   	{
   		alert("������ײ���Ȩ��Ϣ����ϵ��ʽ��������10-1000���ַ�֮�䣡");
       	document.form1.copyright.focus();
      	return false;  
   	}
}
//��֤���ӹ���Ա
function checkUser()
{
	if(document.form1.add.checked)
	{
		if(document.form1.username.value=="")
		{
			alert("���������Ա����");
			document.form1.username.focus();
			return false;
		}
		if(document.form1.username.value.length<6||document.form1.username.value.length>10)
		{
			alert("����Ա����6-10λ֮�䣡");
			document.form1.username.focus();
			return false;
		}
		if(document.form1.password.value=="")
		{
			alert("���������Ա��¼���룡");
			document.form1.password.focus();
			return false;
		}
		if(document.form1.password.value.length<6||document.form1.password.value.length>16)
		{
			alert("������6-16λ֮�䣡");
			document.form1.password.focus();
			return false;
		}
		if(document.form1.isuse.value=="")
		{
			alert("��ѡ���趨״̬��");
			document.form1.isuse.focus();
			return false;
		}
		document.form1.ra.value="add";
	}
	if(document.form1.update.checked)
	{
		if(document.form1.password.value!="")
		{
			if(document.form1.password.value.length<6||document.form1.password.value.length>16)
			{
				alert("������6-16λ֮�䣡");
				document.form1.password.focus();
				return false;
			}
		}	
		if(document.form1.isuse.value=="")
		{
			alert("��ѡ���趨״̬��");
			document.form1.isuse.focus();
			return false;
		}
		document.form1.ra.value="update";
	}
}
//��֤�޸Ĺ���Ա����
function checkPWD()
{
	if(document.form1.oldpwd.value=="")
	{
		alert("����������룡");
		document.form1.oldpwd.focus();
		return false;
	}
	if(document.form1.newpwd.value=="")
	{
		alert("�����������룡");
		document.form1.newpwd.focus();
		return false;
	}
	if(document.form1.newpwd.value.length<6||document.form1.newpwd.value.length>16)
	{
		alert("����Ϊ6-16λ֮�䣡");
		document.form1.newpwd.focus();
		return false;
	}
	if(document.form1.repwd.value=="")
	{
		alert("��ȷ�����룡");
		document.form1.repwd.focus();
		return false;
	}
	if(document.form1.repwd.value!=document.form1.newpwd.value)
	{
		alert("�Բ���������������벻��ͬ����ȷ�����룡");
		document.form1.repwd.focus();
		return false;
	}
}

//��֤�����˵�����
function checkMENU()
{
	if(document.form1.menuname.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("������˵����ƣ�");
		document.form1.menuname.focus();
		return false;
	}
	if(document.form1.pic.value.replace(/\s+$|^\s+/g,"").length>0)
	{
		var fileext=form1.pic.value.substring(form1.pic.value.length-4,form1.pic.value.length); 
		fileext=fileext.toLowerCase(); 
		if(!(fileext=='.jpg')&&!(fileext=='.gif')) 
		{
			alert("�Բ����ļ���ʽ����,����Ϊjpg��gif��ʽ�ļ�!"); 
			form1.pic.focus(); 
			return false; 
		} 
		var filestr = document.all.pic.value;
		 var fso,f; 
		 fso=new ActiveXObject("Scripting.FileSystemObject");  
		 f=fso.GetFile(filestr); 
		 if(f.size>80*1024)
		 {
		 	alert("�Բ���ͼƬ������ü������ϴ���"); 
		 	return false;
		 }
	}
	if(document.form1.linkurl.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("���������ӵ�ַ��");
		document.form1.linkurl.focus();
		return false;
	}
	if(document.form1.ordernum.value.replace(/\s+$|^\s+/g,"").length>0)
	{
		if(isNaN(document.form1.ordernum.value))
		{
		   	alert("�������������֣�");
			document.form1.ordernum.focus();
			return false;	
		}
	}
	form1.submit();
}

//��֤������������
function subFLINK()
{
	if(document.form1.linkname.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("�������������ƣ�");
		document.form1.linkname.focus();
		return false;
	}
	if(document.form1.linkurl.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("���������ӵ�ַ��");
		document.form1.linkurl.focus();
		return false;
	}
/**	if(document.form1.method.value=="addflink")
	{
		if(document.form1.linkpic.value.replace(/\s+$|^\s+/g,"").length<=0)
		{
			alert("��ѡ��LOGOͼƬ��");
			document.form1.linkpic.focus();
			return false;
		}
*/
	if(document.form1.linkpic.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
	//	var fileext=form1.linkpic.value.substring(form1.linkpic.value.length-4,form1.linkpic.value.length); 
	//	fileext=fileext.toLowerCase(); 
	//	if(!(fileext=='.jpg')&&!(fileext=='.gif')) 
	//	{
	//		alert("�Բ����ļ���ʽ����,����Ϊjpg��gif��ʽ�ļ�!"); 
			alert("����дlogo��ַ��");
			form1.linkpic.focus(); 
			return false; 
	//	} 
	}
		/**
		var filestr = document.all.linkpic.value;
		 var fso,f; 
		 fso=new ActiveXObject("Scripting.FileSystemObject");  
		 f=fso.GetFile(filestr); 
		 if(f.size>80*1024)
		 {
		 	alert("�Բ���ͼƬ������ü������ϴ���"); 
		 	return false;
		 }
		 */
//	}	
	if(document.form1.intero.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����������˵����");
		document.form1.intero.focus();
		return false;
	}
	if(document.form1.ordervalue.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("�������������֣�");
		document.form1.ordervalue.focus();
		return false;	
	}
	if(isNaN(document.form1.ordervalue.value))
	{
	   	alert("�������������֣�");
		document.form1.ordervalue.focus();
		return false;	
	}
	form1.submit();
}
//��֤����ύ����
function subAD()
{
	if(document.form1.adplace.value=="")
	{
		alert("��ѡ����λ�ã�");
		document.form1.adplace.focus();
		return false;
	}
	if(document.form1.title.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д������ƣ�");
		document.form1.title.focus();
		return false;
	}
	if(document.form1.method.value=="AddAD")
	{
		if(document.form1.picurl.value.replace(/\s+$|^\s+/g,"").length<=0)
		{
			alert("���ϴ����ͼƬ��");
			document.form1.picurl.focus();
			return false;
		}
		if(document.form1.picurl.value.replace(/\s+$|^\s+/g,"").length>0)
		{
			var fileext=form1.picurl.value.substring(form1.picurl.value.length-4,form1.picurl.value.length); 
			fileext=fileext.toLowerCase(); 
			if(!(fileext=='.jpg')&&!(fileext=='.gif')&&!(fileext=='.swf')) 
			{
				alert("�Բ����ļ���ʽ����,����Ϊjpg��gif��swf��ʽ�ļ�!"); 
				form1.picurl.focus(); 
				return false; 
			} 
			/**
			var filestr = document.all.picurl.value;
			 var fso,f; 
			 fso=new ActiveXObject("Scripting.FileSystemObject");  
			 f=fso.GetFile(filestr); 
			 if(f.size>80*1024)
			 {
			 	alert("�ϴ��ļ�������ü������ϴ���"); 
			 	form1.picurl.focus(); 
			 	return false;
			 }
			 */
		}
	}
	if(document.form1.picurl.value.replace(/\s+$|^\s+/g,"").length>0)
	{
		var fileext=form1.picurl.value.substring(form1.picurl.value.length-4,form1.picurl.value.length); 
		fileext=fileext.toLowerCase(); 
		if(!(fileext=='.jpg')&&!(fileext=='.gif')&&!(fileext=='.swf')) 
		{
			alert("�Բ����ļ���ʽ����,����Ϊjpg��gif��swf��ʽ�ļ�!"); 
			form1.picurl.focus(); 
			return false; 
		} 
		/**
		var filestr = document.all.picurl.value;
		 var fso,f; 
		 fso=new ActiveXObject("Scripting.FileSystemObject");  
		 f=fso.GetFile(filestr); 
		 if(f.size>80*1024)
		 {
		 	alert("�ϴ��ļ�������ü������ϴ���"); 
		 	form1.picurl.focus(); 
		 	return false;
		 }
		 */
	}
	if(document.form1.linkurl.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д������ӵ�ַ��");
		document.form1.linkurl.focus();
		return false;
	}
	if(document.form1.intro.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д���˵����");
		document.form1.intro.focus();
		return false;
	}
	if(document.form1.stime.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д��濪ʼʱ�䣡");
		document.form1.stime.focus();
		return false;
	}
	if(document.form1.etime.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����д��浽��ʱ�䣡");
		document.form1.etime.focus();
		return false;
	}
	form1.submit();
}

//��֤qq�����ͷ�����
function subQQ()
{
	if(document.form1.num.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("������QQ���룡");
		document.form1.num.focus();
		return false;
	}
	if(isNaN(document.form1.num.value))
	{
		alert("QQ����ֻ��Ϊ���֣�");
		document.form1.num.focus();
		return false;
	}
	if(document.form1.num.value.replace(/\s+$|^\s+/g,"").length<5||document.form1.num.value.replace(/\s+$|^\s+/g,"").length>9)
	{
		alert("QQ������5-9λ֮�䣡");
		document.form1.num.focus();
		return false;
	}
	if(document.form1.intro.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("����������˵����");
		document.form1.intro.focus();
		return false;
	}
	form1.submit();
}

//��֤�����������
function subDUILIAN()
{
	if(document.form1.title.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("���������ƣ�");
		document.form1.title.focus();
		return false;
	}
	if(document.form1.id.value==0)
	{
		if(document.form1.lefturl.value.replace(/\s+$|^\s+/g,"").length<=0)
		{
			alert("���ϴ�������ͼƬ��");
			document.form1.lefturl.focus();
			return false;
		}
		if(document.form1.lefturl.value.replace(/\s+$|^\s+/g,"").length>0)
		{
			var fileext=form1.lefturl.value.substring(form1.lefturl.value.length-4,form1.lefturl.value.length); 
			fileext=fileext.toLowerCase(); 
			if(!(fileext=='.jpg')&&!(fileext=='.gif')) 
			{
				alert("�Բ����ļ���ʽ����,����Ϊjpg��gif��ʽ�ļ�!"); 
				form1.lefturl.focus(); 
				return false; 
			} 
			var filestr = document.all.lefturl.value;
			 var fso,f; 
			 fso=new ActiveXObject("Scripting.FileSystemObject");  
			 f=fso.GetFile(filestr); 
			 if(f.size>300*1024)
			 {
			 	alert("�Բ���ͼƬ������ü������ϴ���"); 
			 	return false;
			 }
		}
		if(document.form1.righturl.value.replace(/\s+$|^\s+/g,"").length<=0)
		{
			alert("���ϴ��Ҳ����ͼƬ��");
			document.form1.righturl.focus();
			return false;
		}
		if(document.form1.righturl.value.replace(/\s+$|^\s+/g,"").length>0)
		{
			var fileext=form1.righturl.value.substring(form1.righturl.value.length-4,form1.righturl.value.length); 
			fileext=fileext.toLowerCase(); 
			if(!(fileext=='.jpg')&&!(fileext=='.gif')) 
			{
				alert("�Բ����ļ���ʽ����,����Ϊjpg��gif��ʽ�ļ�!"); 
				form1.righturl.focus(); 
				return false; 
			} 
			var filestr = document.all.righturl.value;
			 var fso,f; 
			 fso=new ActiveXObject("Scripting.FileSystemObject");  
			 f=fso.GetFile(filestr); 
			 if(f.size>300*1024)
			 {
			 	alert("�Բ���ͼƬ������ü������ϴ���"); 
			 	return false;
			 }
		}
	}
	if(document.form1.id.value!=0)
	{
		if(document.form1.lefturl.value.replace(/\s+$|^\s+/g,"").length>0)
		{
			var fileext=form1.lefturl.value.substring(form1.lefturl.value.length-4,form1.lefturl.value.length); 
			fileext=fileext.toLowerCase(); 
			if(!(fileext=='.jpg')&&!(fileext=='.gif')) 
			{
				alert("�Բ����ļ���ʽ����,����Ϊjpg��gif��ʽ�ļ�!"); 
				form1.lefturl.focus(); 
				return false; 
			} 
			var filestr = document.all.lefturl.value;
			 var fso,f; 
			 fso=new ActiveXObject("Scripting.FileSystemObject");  
			 f=fso.GetFile(filestr); 
			 if(f.size>300*1024)
			 {
			 	alert("�Բ���ͼƬ������ü������ϴ���"); 
			 	return false;
			 }
		}
		if(document.form1.righturl.value.replace(/\s+$|^\s+/g,"").length>0)
		{
			var fileext=form1.righturl.value.substring(form1.righturl.value.length-4,form1.righturl.value.length); 
			fileext=fileext.toLowerCase(); 
			if(!(fileext=='.jpg')&&!(fileext=='.gif')) 
			{
				alert("�Բ����ļ���ʽ����,����Ϊjpg��gif��ʽ�ļ�!"); 
				form1.righturl.focus(); 
				return false; 
			} 
			var filestr = document.all.righturl.value;
			 var fso,f; 
			 fso=new ActiveXObject("Scripting.FileSystemObject");  
			 f=fso.GetFile(filestr); 
			 if(f.size>300*1024)
			 {
			 	alert("�Բ���ͼƬ������ü������ϴ���"); 
			 	return false;
			 }
		}
	}
	if(document.form1.leftlink.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("������������ӵ�ַ��");
		document.form1.leftlink.focus();
		return false;
	}
	if(document.form1.rightlink.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("�������Ҳ����ӵ�ַ��");
		document.form1.rightlink.focus();
		return false;
	}
	form1.submit();
}

//��֤��ҳ�������
function subFLYAD()
{
	if(document.form1.title.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("���������ƣ�");
		document.form1.title.focus();
		return false;
	}
	if(document.form1.id.value==0)
	{
		if(document.form1.lefturl.value.replace(/\s+$|^\s+/g,"").length<=0)
		{
			alert("���ϴ�����ͼƬ��");
			document.form1.lefturl.focus();
			return false;
		}
		if(document.form1.lefturl.value.replace(/\s+$|^\s+/g,"").length>0)
		{
			var fileext=form1.lefturl.value.substring(form1.lefturl.value.length-4,form1.lefturl.value.length); 
			fileext=fileext.toLowerCase(); 
			if(!(fileext=='.jpg')&&!(fileext=='.gif')) 
			{
				alert("�Բ����ļ���ʽ����,����Ϊjpg��gif��ʽ�ļ�!"); 
				form1.lefturl.focus(); 
				return false; 
			} 
			var filestr = document.all.lefturl.value;
			 var fso,f; 
			 fso=new ActiveXObject("Scripting.FileSystemObject");  
			 f=fso.GetFile(filestr); 
			 if(f.size>300*1024)
			 {
			 	alert("�Բ���ͼƬ������ü������ϴ���"); 
			 	return false;
			 }
		}
	}
	if(document.form1.id.value!=0)
	{
		if(document.form1.lefturl.value.replace(/\s+$|^\s+/g,"").length>0)
		{
			var fileext=form1.lefturl.value.substring(form1.lefturl.value.length-4,form1.lefturl.value.length); 
			fileext=fileext.toLowerCase(); 
			if(!(fileext=='.jpg')&&!(fileext=='.gif')) 
			{
				alert("�Բ����ļ���ʽ����,����Ϊjpg��gif��ʽ�ļ�!"); 
				form1.lefturl.focus(); 
				return false; 
			} 
			var filestr = document.all.lefturl.value;
			 var fso,f; 
			 fso=new ActiveXObject("Scripting.FileSystemObject");  
			 f=fso.GetFile(filestr); 
			 if(f.size>300*1024)
			 {
			 	alert("�Բ���ͼƬ������ü������ϴ���"); 
			 	return false;
			 }
		}
	}
	if(document.form1.leftlink.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("���������ӵ�ַ��");
		document.form1.leftlink.focus();
		return false;
	}
	form1.submit();
}

//��վͶƱ��վ�ڵ��飩��֤
function subVote()
{
	if(document.form1.title.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("������������⣡");
		document.form1.title.focus();
		return false;
	}
	
	if(document.form1.item1.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("������ѡ��һ��");
		document.form1.item1.focus();
		return false;
	}
	if(document.form1.tick1.value.replace(/\s+$|^\s+/g,"").length>0)
	{
		if(isNaN(document.form1.tick1.value))
		{
			alert("����ȷ����Ʊ����");
			document.form1.tick1.focus();
			return false;
		}
	}
	if(document.form1.item2.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("������ѡ�����");
		document.form1.item2.focus();
		return false;
	}
	if(document.form1.tick2.value.replace(/\s+$|^\s+/g,"").length>0)
	{
		if(isNaN(document.form1.tick2.value))
		{
			alert("����ȷ����Ʊ����");
			document.form1.tick2.focus();
			return false;
		}
	}
	if(document.form1.item3.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("������ѡ������");
		document.form1.item3.focus();
		return false;
	}
	if(document.form1.tick3.value.replace(/\s+$|^\s+/g,"").length>0)
	{
		if(isNaN(document.form1.tick3.value))
		{
			alert("����ȷ����Ʊ����");
			document.form1.tick3.focus();
			return false;
		}
	}
	if(document.form1.item4.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("������ѡ���ģ�");
		document.form1.item4.focus();
		return false;
	}
	if(document.form1.tick4.value.replace(/\s+$|^\s+/g,"").length>0)
	{
		if(isNaN(document.form1.tick4.value))
		{
			alert("����ȷ����Ʊ����");
			document.form1.tick4.focus();
			return false;
		}
	}
	if(document.form1.item5.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("������ѡ���壡");
		document.form1.item5.focus();
		return false;
	}
	if(document.form1.tick5.value.replace(/\s+$|^\s+/g,"").length>0)
	{
		if(isNaN(document.form1.tick5.value))
		{
			alert("����ȷ����Ʊ����");
			document.form1.tick5.focus();
			return false;
		}
	}
	if(document.form1.item6.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("������ѡ������");
		document.form1.item6.focus();
		return false;
	}
	if(document.form1.tick6.value.replace(/\s+$|^\s+/g,"").length>0)
	{
		if(isNaN(document.form1.tick6.value))
		{
			alert("����ȷ����Ʊ����");
			document.form1.tick6.focus();
			return false;
		}
	}
	form1.submit();
}

//���� ���� ���� ���� ��Ƹ������֤
function infoClass()
{
	if(document.form1.classname.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("��������Ϣ����");
		document.form1.classname.focus();
		return false;
	}
	form1.submit();
}
/*
if (window.Event) 
document.captureEvents(Event.MOUSEUP); 
function nocontextmenu() 
{
event.cancelBubble = true
event.returnValue = false;
return false;
}
function norightclick(e) 
{
if (window.Event) 
{
if (e.which == 2 || e.which == 3)
return false;
}
else
if (event.button == 2 || event.button == 3)
{
event.cancelBubble = true
event.returnValue = false;
return false;
}
}
document.oncontextmenu = nocontextmenu; // for IE5+
document.onmousedown = norightclick; // for all others
*/
function OnclikeTableInfoCLASS(tr){

	var frm = document.form1[0];
	var vlu = new Array();
	for( i = 0 ; i < 5 ; i++ ){
		vlu[i] = tr.childNodes[i].childNodes[0].nodeValue;
		if(vlu[i]==null){
			vlu[i] = "";
		}
	}
	form1.classname.value = vlu[1];
	form1.id2.value = vlu[0];
	form1.action.value="up";

}
function OnclikeTable(tr){

	var frm = document.form1[0];
	var vlu = new Array();
	for( i = 0 ; i < 6 ; i++ ){
		vlu[i] = tr.childNodes[i].childNodes[0].nodeValue;
		if(vlu[i]==null){
			vlu[i] = "";
		}
	}
	form1.username.value = vlu[1];
	form1.username.readonly=true;
	//alert(vlu[3]);
	form1.isuse.value = vlu[3];
	form1.add.checked=false;
	form1.add.disabled=true;
	form1.update.checked=true;
	form1.update.disabled=false;
}
function OnclikeTableitem(tr){

	var frm = document.form1[0];
	var vlu = new Array();
	for( i = 0 ; i < 2 ; i++ ){
		vlu[i] = tr.childNodes[i].childNodes[0].nodeValue;
		if(vlu[i]==null){
			vlu[i] = "";
		}
	}
	
	form1.id.value = vlu[0];
	form1.itemname.value = vlu[1];
}

function OnclikeTableitemClass(tr){

	var frm = document.form1[0];
	var vlu = new Array();
	for( i = 0 ; i < 2 ; i++ ){
		vlu[i] = tr.childNodes[i].childNodes[0].nodeValue;
		if(vlu[i]==null){
			vlu[i] = "";
		}
	}
	
	form1.id.value = vlu[0];
	form1.classname.value = vlu[1];
}
 //
function changecheck()
{
	form1.add.checked=true;
	form1.update.checked=false;
}
function changecheck2()
{
	form1.add.checked=false;
	form1.update.checked=true;
} 

function is_zw(str)
{
	//exp=/[0-9a-zA-Z_.,#@!$%^&*()-+=|\?/<>]/g;
	//if(str.search(exp) != -1)
	//{
	//	return false;
	//}
	//return true;
}
//
function CheckBadChar(Obj,AlertStr)
{
	exp=/[,]/g;
	if(Obj.value.search(exp) != -1)
	{   alert(AlertStr);
	    Obj.value="";
		Obj.focus();
		return false;
	}
	return true;
}
//
function IsExt(FileName, AllowExt){
		var sTemp;
		var s=AllowExt.toUpperCase().split("|");
		for (var i=0;i<s.length ;i++ ){
			sTemp=FileName.substr(FileName.length-s[i].length-1);
			sTemp=sTemp.toUpperCase();
			s[i]="."+s[i];
			if (s[i]==sTemp){
				return true;
				break;
			}
		}
		return false;
}
//
function is_number(str)
{
	exp=/[^0-9()-]/g;
	if(str.search(exp) != -1)
	{
		return false;
	}
	return true;
}
//
function CheckNumber(Obj,DescriptionStr)
{
	if (Obj.value!='' && (isNaN(Obj.value) || Obj.value<0))
	{
		alert(DescriptionStr);
		Obj.value="";
		Obj.focus();
		return false;
	}
	return true;
}
//
function is_email(str)
{ if((str.indexOf("@")==-1)||(str.indexOf(".")==-1)){
	
	return false;
	}
	return true;
}
function CheckAll(form)
{
				  for (var i=0;i<form.elements.length;i++)
				  {
					var e = form.elements[i];
					if (e.Name != 'chkAll'&&e.disabled==false)
					   e.checked = form.chkAll.checked;
					}
 } 
function OpenWindow(Url,Width,Height,WindowObj)
{
	var ReturnStr=showModalDialog(Url,WindowObj,'dialogWidth:'+Width+'pt;dialogHeight:'+Height+'pt;status:no;help:no;scroll:no;status:0;help:0;scroll:0;');
	return ReturnStr;
}
function WinPop(url, width, height)
{
  window.showModelessDialog(url,"",'dialogWidth=' + width + 'px; dialogHeight=' + height + 'px; resizable=no; help=no; scroll=no; status=no;resizable=0; help=0; scroll=0; status=0;'); 
}
function OpenThenSetValue(Url,Width,Height,WindowObj,SetObj)
{
	var ReturnStr=showModalDialog(Url,WindowObj,'dialogWidth:'+Width+'pt;dialogHeight:'+Height+'pt;status:no;help:no;scroll:no;status:0;help:0;scroll:0;');
	if (ReturnStr!='') SetObj.value=ReturnStr;
	return ReturnStr;
}
function OpeneditorWindow(Url,WindowName,Width,Height)
{
	window.open(Url,WindowName,'toolbar=0,location=0,maximize=1,directories=0,status=1,menubar=0,scrollbars=0,resizable=1,top=50,left=50,width='+Width+',height='+Height);
}

function CheckEnglishStr(Obj,DescriptionStr)
{
	var TempStr=Obj.value,i=0,ErrorStr='',CharAscii;
	if (TempStr!='')
	{
		for (i=0;i<TempStr.length;i++)
		{
			CharAscii=TempStr.charCodeAt(i);
			if (CharAscii>=255||CharAscii<=31)
			{
				ErrorStr=ErrorStr+TempStr.charAt(i);
			}
			else
			{
				if (!CheckErrorStr(CharAscii))
				{
					ErrorStr=ErrorStr+TempStr.charAt(i);
				}
			}
		}
		if (ErrorStr!='')
		{
			alert("\n\n"+DescriptionStr+''+ErrorStr);
			Obj.focus();
			return false;
		}
		if (!(((TempStr.charCodeAt(0)>=48)&&(TempStr.charCodeAt(0)<=57))||((TempStr.charCodeAt(0)>=65)&&(TempStr.charCodeAt(0)<=90))||((TempStr.charCodeAt(0)>=97)&&(TempStr.charCodeAt(0)<=122))))
		{
			alert(DescriptionStr);
			Obj.focus();
			return false;
		}
	}
	return true;
}
function CheckErrorStr(CharAsciiCode)
{
	var TempArray=new Array(34,47,92,42,58,60,62,63,124);
	for (var i=0;i<TempArray.length;i++)
	{
		if (CharAsciiCode==TempArray[i]) return false;
	}
	return true;
}
//
function SelectObjItem(Obj,OpStr,ButtonSymbol,MainUrl)
{   if (OpStr!='')
    {window.parent.parent.frames['BottomFrame'].location.href='../help.jsp'}
	if(MainUrl!='')
	{window.parent.parent.frames['MainFrame'].location.href=MainUrl;
	}
	if (Obj!='')
	 {
	   for (var i=0;i<document.all.length;i++)
	   {
		if (document.all(i).className=='FolderSelectItem') document.all(i).className='FolderItem';
	    }
	   Obj.className='FolderSelectItem';
	}
}
//
function SelectObjItem1(Obj,OpStr,ButtonSymbol,MainUrl)
{   if (OpStr!='')
    {window.parent.parent.frames['BottomFrame'].location.href='help.jsp'}
	if(MainUrl!='')
	{window.parent.parent.frames['MainFrame'].location.href=MainUrl;
	}
	if (Obj!='')
	 {
	   for (var i=0;i<document.all.length;i++)
	   {
		if (document.all(i).className=='FolderSelectItem') document.all(i).className='FolderItem';
	    }
	   Obj.className='FolderSelectItem';
	}
}
function FolderClick(Obj,el)
{   	var i=0;
  for (var i=0;i<document.all.length;i++)
	   {
		if (document.all(i).className=='FolderSelected') document.all(i).className='';
	    }
	         Obj.className='FolderSelected';
	  
              for (i=0;i<DocElementArr.length;i++)
			{
				if (el==DocElementArr[i].Obj)
				{
					if (DocElementArr[i].Selected==false)
					{
						DocElementArr[i].Obj.className='FolderSelectItem';
						DocElementArr[i].Selected=true;
					}
					else
					{
						DocElementArr[i].Obj.className='FolderItem';
						DocElementArr[i].Selected=false;
					}
				}
			}
}
function InsertKeyWords(obj,KeyWords)
{
	if (KeyWords!='')
	{
		if (obj.value.search(KeyWords)==-1)
		{
			if (obj.value=='') obj.value=KeyWords;
			else obj.value=obj.value+'|'+KeyWords;
			
		}
	}
	if (KeyWords == 'Clean')
	{
		obj.value = '';
	}
	return;
}
function Getcolor(img_val,Url,input_val){
	var arr = showModalDialog(Url, "", "dialogWidth:18.5em; dialogHeight:17.5em; status:0; help:0");
	if (arr != null){
		document.getElementById(input_val).value = arr;
		img_val.style.backgroundColor = arr;
		}
}
//
function SendFrameInfo(MainUrl,LeftUrl,ControlUrl)
{
	location.href=MainUrl;
    parent.frames['LeftFrame'].LeftInfoFrame.location.href=LeftUrl;
	 parent.frames['BottomFrame'].location.href=ControlUrl;
}