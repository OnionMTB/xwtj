package com.action;

/**
 * ��վ����
 * @author Administrator
 *
 */

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.bean.AfficheBean;
import com.bean.SystemBean;
import com.util.Constant;
import com.util.Filter;

public class AfficheServlet extends HttpServlet {

	/**
	 * ����Ĺ��캯����
	 */
	public AfficheServlet() {
		super();
	}

	/**
	 * �ƻ�servlet�� <br>
	 */
	@Override
	public void destroy() {
		super.destroy(); // ֻ������־�����롰destroy���ַ�������
		// ����Ĵ����������
	}

	/**
	 * servlet��doGet������ <br>
	 *
	 * �����ı��ֵ��������getʱ�������ô˷�����
	 * 
	 * @param ����ͻ��˷��͸�������������
	 * @param ��Ӧ���������͸��ͻ��˵���Ӧ
	 * @throws ��������ʱ����ServletException
	 * @throws IOException�����������
	 */
	@Override
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		doPost(request, response);
	}

	/**
	 * servlet��doPost������ <br>
	 *
	 * �����ı��ֵ��������postʱ�������ô˷�����
	 * 
	 * @param ����ͻ��˷��͸�������������
	 * @param ��Ӧ���������͸��ͻ��˵���Ӧ
	 * @throws ��������ʱ����ServletException
	 * @throws IOException�����������
	 */
	@Override
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		response.setContentType(Constant.CONTENTTYPE);
		request.setCharacterEncoding(Constant.CHARACTERENCODING);
		String sysdir = new SystemBean().getDir();
		HttpSession session = request.getSession();
		try {
			String username2 = (String) session.getAttribute("user");
			if (username2 == null) {
				request.getRequestDispatcher("error.jsp").forward(request, response);
			} else {
				AfficheBean afficheBean = new AfficheBean();
				String method = request.getParameter("method").trim();
				if (method.equals("addAffiche")) {// ���ӹ���
					String title = Filter.escapeHTMLTags(request.getParameter("title").trim());
					String content = Filter.escapeHTMLTags(request.getParameter("content").trim());
					String adder = username2;
					String ifhide = Filter.escapeHTMLTags(request.getParameter("ifhide").trim());
					int flag = afficheBean.addAffiche(title, content, adder, ifhide);
					if (flag == Constant.SUCCESS) {
						request.setAttribute("message", "�����ɹ���");
						request.getRequestDispatcher(sysdir + "/affiche/index.jsp").forward(request, response);
					} else {
						request.setAttribute("message", "ϵͳά�������Ժ����ԣ�");
						request.getRequestDispatcher(sysdir + "/affiche/index.jsp").forward(request, response);
					}
				} else if (method.equals("editAffiche")) {// �޸Ĺ���
					String id = Filter.escapeHTMLTags(request.getParameter("id").trim());
					String title = Filter.escapeHTMLTags(request.getParameter("title").trim());
					String content = Filter.escapeHTMLTags(request.getParameter("content").trim());
					String adder = username2;
					String ifhide = Filter.escapeHTMLTags(request.getParameter("ifhide").trim());
					int flag = afficheBean.updateAffiche(Integer.parseInt(id), title, content, adder, ifhide);
					if (flag == Constant.SUCCESS) {
						request.setAttribute("message", "�����ɹ���");
						request.getRequestDispatcher(sysdir + "/affiche/index.jsp").forward(request, response);
					} else {
						request.setAttribute("message", "ϵͳά�������Ժ����ԣ�");
						request.getRequestDispatcher(sysdir + "/affiche/index.jsp").forward(request, response);
					}
				} else if (method.equals("hideAffiche")) {
					String id = Filter.escapeHTMLTags(request.getParameter("id").trim());
					int flag = afficheBean.hideAffiche(Integer.parseInt(id));
					if (flag == Constant.SUCCESS) {
						request.getRequestDispatcher(sysdir + "/affiche/index.jsp").forward(request, response);
					} else {
						request.setAttribute("message", "ϵͳά���У����Ժ����ԣ�");
						request.getRequestDispatcher(sysdir + "/affiche/index.jsp").forward(request, response);
					}
				} else if (method.equals("delaffiche")) {// ɾ������
					String check[] = request.getParameterValues("checkit");
					if (check == null) {
						request.setAttribute("message", "��ѡ��Ҫɾ���ļ�¼��");
						request.getRequestDispatcher(sysdir + "/affiche/index.jsp").forward(request, response);
					} else {
						int id[] = new int[check.length];
						for (int i = 0; i < check.length; i++) {
							int s = Integer.parseInt(check[i]);
							id[i] = s;
						}
						int flag = afficheBean.delAffiche(id);
						if (flag == Constant.SUCCESS) {
							request.getRequestDispatcher(sysdir + "/affiche/index.jsp").forward(request, response);
						} else {
							request.setAttribute("message", "ϵͳά���У����Ժ����ԣ�");
							request.getRequestDispatcher(sysdir + "/affiche/index.jsp").forward(request, response);
						}
					}
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			request.getRequestDispatcher("error.jsp").forward(request, response);
		}
	}

	/**
	 * ��ʼ��servlet�� <br>
	 *
	 * @throws ��������ʱ����ServletException
	 */
	@Override
	public void init() throws ServletException {
		// ����Ĵ����������
	}

}
