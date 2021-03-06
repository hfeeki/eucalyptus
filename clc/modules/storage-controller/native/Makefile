# Copyright 2009-2012 Eucalyptus Systems, Inc.
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation; version 3 of the License.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program.  If not, see http://www.gnu.org/licenses/.
#
# Please contact Eucalyptus Systems, Inc., 6755 Hollister Ave., Goleta
# CA 93117, USA or visit http://www.eucalyptus.com/licenses/ if you need
# additional information or have any questions.
#
# This file may incorporate work covered under the following copyright
# and permission notice:
#
#   Software License Agreement (BSD License)
#
#   Copyright (c) 2008, Regents of the University of California
#   All rights reserved.
#
#   Redistribution and use of this software in source and binary forms,
#   with or without modification, are permitted provided that the
#   following conditions are met:
#
#     Redistributions of source code must retain the above copyright
#     notice, this list of conditions and the following disclaimer.
#
#     Redistributions in binary form must reproduce the above copyright
#     notice, this list of conditions and the following disclaimer
#     in the documentation and/or other materials provided with the
#     distribution.
#
#   THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
#   "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
#   LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
#   FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
#   COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
#   INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
#   BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
#   LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
#   CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
#   LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
#   ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
#   POSSIBILITY OF SUCH DAMAGE. USERS OF THIS SOFTWARE ACKNOWLEDGE
#   THE POSSIBLE PRESENCE OF OTHER OPEN SOURCE LICENSED MATERIAL,
#   COPYRIGHTED MATERIAL OR PATENTED MATERIAL IN THIS SOFTWARE,
#   AND IF ANY SUCH MATERIAL IS DISCOVERED THE PARTY DISCOVERING
#   IT MAY INFORM DR. RICH WOLSKI AT THE UNIVERSITY OF CALIFORNIA,
#   SANTA BARBARA WHO WILL THEN ASCERTAIN THE MOST APPROPRIATE REMEDY,
#   WHICH IN THE REGENTS' DISCRETION MAY INCLUDE, WITHOUT LIMITATION,
#   REPLACEMENT OF THE CODE SO IDENTIFIED, LICENSING OF THE CODE SO
#   IDENTIFIED, OR WITHDRAWAL OF THE CODE CAPABILITY TO THE EXTENT
#   NEEDED TO COMPLY WITH ANY SUCH LICENSES OR RIGHTS.

include ../../../../Makedefs

LIBDIR=../lib
LVM2_SO=liblvm2control.so
DAS_SO=libdascontrol.so
PLATFORM=linux
CFLAGS=-g -fpic -I $(JAVA_HOME)/include -I $(JAVA_HOME)/include/$(PLATFORM) -I. -I../include
WARN=-Wall -Wno-unused-variable

.PHONY: all clean install

all: $(LIBDIR)/$(LVM2_SO) $(LIBDIR)/$(DAS_SO) 

.c.o:
	gcc -c $(WARN) $(CPPFLAGS) $(CFLAGS) $<

$(LIBDIR)/$(LVM2_SO): 
	mkdir -p $(LIBDIR)
	gcc -shared $(CPPFLAGS) $(CFLAGS) -o $(LIBDIR)/$(LVM2_SO) com_eucalyptus_storage_OverlayManager.c com_eucalyptus_storage_AOEManager.c

$(LIBDIR)/$(DAS_SO): 
	mkdir -p $(LIBDIR)
	gcc -shared $(CPPFLAGS) $(CFLAGS) -o $(LIBDIR)/$(DAS_SO) com_eucalyptus_storage_DASManager.c

indent:
	@for idfile in *.[ch]; do \
		echo $(INDENTTOOLS) $$idfile $(INDENTFLAGS) -o $$idfile ; \
		$(INDENTTOOLS) $$idfile $(INDENTFLAGS) -o $$idfile ; \
	done

clean:
	rm -rf $(LIBDIR)
	rm -f $(LVM2_SO) *.o *~* *#*  
	rm -f $(DAS_SO) *.o *~* *#*  

distclean: clean

install:
	mkdir -p $(DESTDIR)$(EUCALYPTUS)/usr/lib/eucalyptus/
	cp $(LIBDIR)/$(LVM2_SO) $(DESTDIR)$(EUCALYPTUS)/usr/lib/eucalyptus/
	cp $(LIBDIR)/$(DAS_SO) $(DESTDIR)$(EUCALYPTUS)/usr/lib/eucalyptus/

uninstall:
	rm -r $(DESTDIR)$(EUCALYPTUS)/usr/lib/eucalyptus/$(LVM2_SO)
	rm -r $(DESTDIR)$(EUCALYPTUS)/usr/lib/eucalyptus/$(DAS_SO)

