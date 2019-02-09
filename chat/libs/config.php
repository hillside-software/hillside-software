<?php
/*
 * This file is part of Mibew Messenger project.
 * 
 * Copyright (c) 2005-2011 Mibew Messenger Community
 * All rights reserved. The contents of this file are subject to the terms of
 * the Eclipse Public License v1.0 which accompanies this distribution, and
 * is available at http://www.eclipse.org/legal/epl-v10.html
 * 
 * Alternatively, the contents of this file may be used under the terms of
 * the GNU General Public License Version 2 or later (the "GPL"), in which case
 * the provisions of the GPL are applicable instead of those above. If you wish
 * to allow use of your version of this file only under the terms of the GPL, and
 * not to allow others to use your version of this file under the terms of the
 * EPL, indicate your decision by deleting the provisions above and replace them
 * with the notice and other provisions required by the GPL.
 * 
 * Contributors:
 *    Evgeny Gryaznov - initial API and implementation
 */

/*
 *  Application path on server
 */
$mibewroot = "/chat";

/*
 *  Internal encoding
 */
$mibew_encoding = "utf-8";

/*
 *  MySQL Database parameters
 */
$mysqlhost = "SanRemo";
$mysqldb = "hillsidesoftware_live";
$mysqllogin = "hillsidesoftware";
$mysqlpass = "LearJet1@#";
$mysqlprefix = "chat_";

$dbencoding = "utf8";
$force_charset_in_connection = true;

/*
 *  Mailbox
 */
$mibew_mailbox = "support@hillsoft.com";
$mail_encoding = "utf-8";

/*
 *  Locales
 */
$home_locale = "en"; /* native name will be used in this locale */
$default_locale = "en"; /* if user does not provide known lang */

?>