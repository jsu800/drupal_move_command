var App = new Ext.Application({
    name : 'MoveCommandApp',
    useLoadMask : true,
    tabletStartupScreen: '/sites/all/themes/mobile/tablet_startup.png',
    phoneStartupScreen: '/sites/all/themes/mobile/phone_startup.png',
    icon: '/sites/all/themes/mobile/tablet_icon.png',
    launch : function () {
      var formIT;
      var formFacilities;
      var selectedTicket;
      var formComment;
      
      Ext.regModel('Ticket', {
        idProperty: 'id',
        fields: [
            {name: 'id', type: 'int'},
            {name: 'date', type: 'string'},
            {name: 'text', type: 'string'},
            {name: 'status', type: 'string'},
            {name: 'type', type: 'string'},
            {name: 'location', type: 'string'},
            {name: 'zone_id', type: 'int'},
            {name: 'priority', type: 'int'},
            {name: 'priorityText', type: 'string'}
        ],
        validations: [
            {type: 'presence', field: 'id'},
            {type: 'presence', field: 'text'}
        ]
      });
      
      //Setup dem stores
      var Zone1Store = new Ext.data.Store({
        model: 'Ticket',
        autoLoad:true,
        sorters: [{property: 'priority',direction: 'DESC'},{property : 'location', direction: 'ASC'}],
        proxy: {type: 'ajax',url : '/m/tickets/list/1',reader: {type: 'json',root: 'tickets'}}
      });
      
      var Zone2Store = new Ext.data.Store({
        model: 'Ticket',
        sorters: [{property: 'priority',direction: 'DESC'},{property : 'location', direction: 'ASC'}],
        proxy: {type: 'ajax',url : '/m/tickets/list/2',reader: {type: 'json',root: 'tickets'}}
      });
      
      var Zone3Store = new Ext.data.Store({
        model: 'Ticket',
        sorters: [{property: 'priority',direction: 'DESC'},{property : 'location', direction: 'ASC'}],
        proxy: {type: 'ajax',url : '/m/tickets/list/3',reader: {type: 'json',root: 'tickets'}}
      });
      
      var Zone4Store = new Ext.data.Store({
        model: 'Ticket',
        sorters: [{property: 'priority',direction: 'DESC'},{property : 'location', direction: 'ASC'}],
        proxy: {type: 'ajax',url : '/m/tickets/list/4',reader: {type: 'json',root: 'tickets'}}
      });
      
      var Zone5Store = new Ext.data.Store({
        model: 'Ticket',
        sorters: [{property: 'priority',direction: 'DESC'},{property : 'location', direction: 'ASC'}],
        proxy: {type: 'ajax',url : '/m/tickets/list/5',reader: {type: 'json',root: 'tickets'}}
      });
      
      var Zone6Store = new Ext.data.Store({
        model: 'Ticket',
        sorters: [{property: 'priority',direction: 'DESC'},{property : 'location', direction: 'ASC'}],
        proxy: {type: 'ajax',url : '/m/tickets/list/6',reader: {type: 'json',root: 'tickets'}}
      });
      
      var Zone7Store = new Ext.data.Store({
        model: 'Ticket',
        sorters: [{property: 'priority',direction: 'DESC'},{property : 'location', direction: 'ASC'}],
        proxy: {type: 'ajax',url : '/m/tickets/list/7',reader: {type: 'json',root: 'tickets'}}
      });
      
      var EscalationStore = new Ext.data.Store({
        model: 'Ticket',
        sorters: [{property: 'priority',direction: 'DESC'},{property : 'location', direction: 'ASC'}],
        proxy: {type: 'ajax',url : '/m/tickets/list/8',reader: {type: 'json',root: 'tickets'}}
      });
      
      var FacilitiesStore = new Ext.data.Store({
        model: 'Ticket',
        sorters: [{property: 'priority',direction: 'DESC'},{property : 'location', direction: 'ASC'}],
        proxy: {type: 'ajax',url : '/m/tickets/list/facilities',reader: {type: 'json',root: 'tickets'}}
      });
      
        var topButtons = [
          {id: 'logout',text: 'Logout',ui: 'action',handler: function () {window.location = '/user/logout'; }},
          { xtype: 'spacer' },
          {id: 'addITTicket',text: 'Add IT Ticket',ui: 'action',handler: function () {formIT.show();}},
          {id: 'addFacilitiesTicket',text: 'Add Facilities Ticket',ui: 'action',handler: function () {formFacilities.show();}}];
      
        var dockedViewportItems = [{
          xtype: 'toolbar',
            layout: {
              pack: 'right'
            },
          title: 'MoveCommand',
          dock: 'top',
          items: topButtons
        }
    ];

        MoveCommandApp.views.viewTicketTopToolbar = new Ext.Toolbar({
            title: 'View Ticket',
            items: [
                {
                    text: 'Back',
                    ui: 'back',
                    handler: function () {
                        MoveCommandApp.views.viewport.setActiveItem('tabContainer', {type: 'slide', direction: 'right'});
                    }
                },
                { xtype: 'spacer' },
                {
                    text: 'Add Comment',
                    ui: 'confirm',
                    handler: function () {
                        formComment.show();
                    }
                }
            ]
        });
        
        function refreshTicketZone(zone_id){
          switch(zone_id){
            case 1:
              Zone1Store.load(function(records, operation, success) {
                MoveCommandApp.views.tabContainer.getTabBar().getComponent(1).setBadge(Zone1Store.getCount());
              });
              break;
            case 2:
              Zone2Store.load(function(records, operation, success) {
                MoveCommandApp.views.tabContainer.getTabBar().getComponent(2).setBadge(Zone2Store.getCount());
              });
              break;
            case 3:
              Zone3Store.load(function(records, operation, success) {
                MoveCommandApp.views.tabContainer.getTabBar().getComponent(3).setBadge(Zone3Store.getCount());
              });
              break;
            case 4:
              Zone4Store.load(function(records, operation, success) {
                MoveCommandApp.views.tabContainer.getTabBar().getComponent(4).setBadge(Zone4Store.getCount());
              });
              break;
            case 5:
              Zone5Store.load(function(records, operation, success) {
                MoveCommandApp.views.tabContainer.getTabBar().getComponent(5).setBadge(Zone5Store.getCount());
              });
              break;
            case 6:
              Zone6Store.load(function(records, operation, success) {
                MoveCommandApp.views.tabContainer.getTabBar().getComponent(6).setBadge(Zone6Store.getCount());
              });
              break;
            case 7:
              Zone7Store.load(function(records, operation, success) {
                MoveCommandApp.views.tabContainer.getTabBar().getComponent(7).setBadge(Zone7Store.getCount());
              });
              break;
            case 8:
              EscalationStore.load(function(records, operation, success) {
                MoveCommandApp.views.tabContainer.getTabBar().getComponent(8).setBadge(EscalationStore.getCount());
              });
              break;
            case 9:
              FacilitiesStore.load(function(records, operation, success) {
                MoveCommandApp.views.tabContainer.getTabBar().getComponent(9).setBadge(FacilitiesStorev.getCount());
              });
              break;
          }
        }
        
        MoveCommandApp.views.viewTicketBottomToolbar = new Ext.Toolbar({
            dock: 'bottom',
            layout: {
              pack: 'center'
            },
            items: [
                {
                    text: 'Own Ticket',
                    ui: 'confirm',
                    width:150,
                    handler: function () {
                      Ext.Ajax.request({
                        url: '/m/tickets/own/'+selectedTicket.getId(),              
                        method: 'GET',
                        success: function(response, opts){ 
                            refreshTicketZone(selectedTicket.get('zone_id'));
                            MoveCommandApp.views.viewport.setActiveItem('tabContainer', {type: 'slide', direction: 'right'});
                        },
                        failure: function(response, opts){
                            console.log('Ext AJAX call failure with status code ' + response.status);
                        }
                      });
                    }
                },
                {
                    text: 'Mark on Hold',
                    ui: 'decline',
                    width:150,
                    handler: function () {
                      Ext.Ajax.request({
                        url: '/m/tickets/on-hold/'+selectedTicket.getId(),              
                        method: 'GET',
                        success: function(response, opts){
                            refreshTicketZone(selectedTicket.get('zone_id'));
                            MoveCommandApp.views.viewport.setActiveItem('tabContainer', {type: 'slide', direction: 'right'});
                        },
                        failure: function(response, opts){
                            console.log('Ext AJAX call failure with status code ' + response.status);

                        }
                      });
                    }
                },{
                    text: 'Escalate Ticket',
                    ui: 'decline',
                    width:150,
                    handler: function () {
                      Ext.Ajax.request({
                        url: '/m/tickets/escalate/'+selectedTicket.getId(),              
                        method: 'GET',
                        success: function(response, opts){
                            refreshTicketZone(selectedTicket.get('zone_id'));
                            EscalationStore.load(function(records, operation, success) {
                              MoveCommandApp.views.tabContainer.getTabBar().getComponent(7).setBadge(EscalationStore.getCount());
                            });
                            MoveCommandApp.views.viewport.setActiveItem('tabContainer', {type: 'slide', direction: 'right'});
                        },
                        failure: function(response, opts){
                            console.log('Ext AJAX call failure with status code ' + response.status);

                        }
                      });
                    }
                },{
                    text: 'Close as Solved',
                    width:150,
                    ui: 'confirm',
                    handler: function () {
                      Ext.Ajax.request({
                        url: '/m/tickets/close/'+selectedTicket.getId(),              
                        method: 'GET',
                        success: function(response, opts){    
                            refreshTicketZone(selectedTicket.get('zone_id'));
                            MoveCommandApp.views.viewport.setActiveItem('tabContainer', {type: 'slide', direction: 'right'});
                        },
                        failure: function(response, opts){
                            console.log('Ext AJAX call failure with status code ' + response.status);
                        }
                      });
                    }
                },
            ]
        });
        
        var viewTicketTemplate = new Ext.XTemplate(
          '<div class="x-ticket-item"><strong>Ticket ID</strong>: #{id}</div>' +
          '<div class="x-ticket-item"><strong>Ticket Status</strong>: {status}</div>' +
          '<div class="x-ticket-item"><strong>Ticket Priority</strong>: {priority}</div>' +
          '<div class="x-ticket-item"><strong>Customer Name</strong>: {customerName}</div>' +
          '<div class="x-ticket-item"><strong>Date/Time</strong>: {date}</div>' +
          '<div class="x-ticket-item"><strong>Assigned Technician</strong>: {assignedTechnician}</div>' +
          '<div class="x-ticket-item"><strong>Network Assignment</strong>: {networkAssignment}</div>' +
          '<div class="x-ticket-item"><strong>Phone Extension</strong>: {phoneNumber}</div>' +
          '<div class="x-ticket-body"><strong>Additional Details</strong>: {additionalDetails}</div>' +
          '<div class="comments"><strong>Comments</strong>: {comments}</div>'
        );
          
        MoveCommandApp.views.viewTicket = new Ext.Panel({id:'viewTicket',
          tpl: viewTicketTemplate,
            dockedItems: [
              MoveCommandApp.views.viewTicketTopToolbar,
              MoveCommandApp.views.viewTicketBottomToolbar
            ]
        });
        
        function update(){
          Zone1Store.load(function(records, operation, success) {
            MoveCommandApp.views.tabContainer.getTabBar().getComponent(1).setBadge(Zone1Store.getCount());
          });
          Zone2Store.load(function(records, operation, success) {
            MoveCommandApp.views.tabContainer.getTabBar().getComponent(2).setBadge(Zone2Store.getCount());
          });
          Zone3Store.load(function(records, operation, success) {
            MoveCommandApp.views.tabContainer.getTabBar().getComponent(3).setBadge(Zone3Store.getCount());
          });
          Zone4Store.load(function(records, operation, success) {
            MoveCommandApp.views.tabContainer.getTabBar().getComponent(4).setBadge(Zone4Store.getCount());
          });
          Zone5Store.load(function(records, operation, success) {
            MoveCommandApp.views.tabContainer.getTabBar().getComponent(5).setBadge(Zone5Store.getCount());
          });
          Zone6Store.load(function(records, operation, success) {
            MoveCommandApp.views.tabContainer.getTabBar().getComponent(6).setBadge(Zone6Store.getCount());
          });
          Zone7Store.load(function(records, operation, success) {
            MoveCommandApp.views.tabContainer.getTabBar().getComponent(7).setBadge(Zone7Store.getCount());
          });
          EscalationStore.load(function(records, operation, success) {
            MoveCommandApp.views.tabContainer.getTabBar().getComponent(8).setBadge(EscalationStore.getCount());
          });
        }
        
        setInterval ( update, 120000 );
        MoveCommandApp.views.Zone1List = new Ext.List({
          id: 'Zone1List',
          store: Zone1Store,
          fullscreen: true,
          defaults: {
            scroll: 'vertical'
          },
          plugins: [{
                ptype: 'pullrefresh',
                refreshFn: function(callback, plugin) {
                var store = plugin.list.getStore();
                  store.load(function(records, operation, success) {
                    callback.call(plugin);
                    MoveCommandApp.views.tabContainer.getTabBar().getComponent(1).setBadge(Zone1Store.getCount());
                  });
                }
            }],
          itemTpl: '<div class="list-item-title">Ticket #{id} - {type} ({priorityText})</div><div class="list-item-location">{location}</div>' +
            '<div class="list-item-status">Status: {status}</div>' +
            '<div class="list-item-text">Additional Details: {text}</div>',
          listeners: {
		itemtap: function(list, index, itm, event){
                  selectedTicket = Zone1Store.getAt(index);
                  hiddenField.setValue(selectedTicket.getId());
                  
                  Ext.Ajax.request({
                        url: '/m/tickets/get/'+selectedTicket.getId(),              
                        method: 'GET',
                        success: function(response, opts){
                            var json = Ext.util.JSON.decode(response.responseText)
                            console.log(viewTicketTemplate.applyTemplate(json.ticket));
                            MoveCommandApp.views.viewTicket.update(json.ticket);
                        },
                        failure: function(response, opts){
                            console.log('Ext AJAX call failure with status code ' + response.status);
                        }
                      });
                  
                  MoveCommandApp.views.viewport.setActiveItem('viewTicket', {type: 'slide', direction: 'left'});
                }			
          }
        });

        MoveCommandApp.views.Zone2List = new Ext.List({
          id: 'Zone2List',
          store: Zone2Store,
          fullscreen: true,
          defaults: {
            scroll: 'vertical'
          },
          plugins: [{
                ptype: 'pullrefresh',
                refreshFn: function(callback, plugin) {
                var store = plugin.list.getStore();
                  store.load(function(records, operation, success) {
                    callback.call(plugin);
                    MoveCommandApp.views.tabContainer.getTabBar().getComponent(2).setBadge(Zone2Store.getCount());
                  });
                }
            }],
          itemTpl: '<div class="list-item-title">Ticket #{id} - {type} ({priorityText})</div><div class="list-item-location">{location}</div>' +
            '<div class="list-item-status">Status: {status}</div>' +
            '<div class="list-item-text">Additional Details: {text}</div>',
          listeners: {
		itemtap: function(list, index, itm, event){
                  selectedTicket = Zone2Store.getAt(index);
                  hiddenField.setValue(selectedTicket.getId());
                  Ext.Ajax.request({
                        url: '/m/tickets/get/'+selectedTicket.getId(),              
                        method: 'GET',
                        success: function(response, opts){
                            var json = Ext.util.JSON.decode(response.responseText)
                            console.log(viewTicketTemplate.applyTemplate(json.ticket));
                            MoveCommandApp.views.viewTicket.update(json.ticket);
                        },
                        failure: function(response, opts){
                            console.log('Ext AJAX call failure with status code ' + response.status);
                        }
                      });
                  
                  MoveCommandApp.views.viewport.setActiveItem('viewTicket', {type: 'slide', direction: 'left'});
                }			
          }
        });
        
        MoveCommandApp.views.Zone3List = new Ext.List({
          id: 'Zone3List',
          store: Zone3Store,
          fullscreen: true,
          defaults: {
            scroll: 'vertical'
          },
          plugins: [{
                ptype: 'pullrefresh',
                refreshFn: function(callback, plugin) {
                var store = plugin.list.getStore();
                  store.load(function(records, operation, success) {
                    callback.call(plugin);
                    MoveCommandApp.views.tabContainer.getTabBar().getComponent(3).setBadge(Zone3Store.getCount());
                  });
                }
            }],
          itemTpl: '<div class="list-item-title">Ticket #{id} - {type} ({priorityText})</div><div class="list-item-location">{location}</div>' +
            '<div class="list-item-status">Status: {status}</div>' +
            '<div class="list-item-text">Additional Details: {text}</div>',
          listeners: {
		itemtap: function(list, index, itm, event){
                  selectedTicket = Zone3Store.getAt(index);
                  hiddenField.setValue(selectedTicket.getId());
                  Ext.Ajax.request({
                        url: '/m/tickets/get/'+selectedTicket.getId(),              
                        method: 'GET',
                        success: function(response, opts){
                            var json = Ext.util.JSON.decode(response.responseText)
                            console.log(viewTicketTemplate.applyTemplate(json.ticket));
                            MoveCommandApp.views.viewTicket.update(json.ticket);
                        },
                        failure: function(response, opts){
                            console.log('Ext AJAX call failure with status code ' + response.status);
                        }
                      });
                  
                  MoveCommandApp.views.viewport.setActiveItem('viewTicket', {type: 'slide', direction: 'left'});
                }			
          }
        });
        
        MoveCommandApp.views.Zone4List = new Ext.List({
          id: 'Zone4List',
          store: Zone4Store,
          fullscreen: true,
          defaults: {
            scroll: 'vertical'
          },
          plugins: [{
                ptype: 'pullrefresh',
                refreshFn: function(callback, plugin) {
                var store = plugin.list.getStore();
                  store.load(function(records, operation, success) {
                    callback.call(plugin);
                    MoveCommandApp.views.tabContainer.getTabBar().getComponent(4).setBadge(Zone4Store.getCount());
                  });
                }
            }],
          itemTpl: '<div class="list-item-title">Ticket #{id} - {type} ({priorityText})</div><div class="list-item-location">{location}</div>' +
            '<div class="list-item-status">Status: {status}</div>' +
            '<div class="list-item-text">Additional Details: {text}</div>',
          listeners: {
		itemtap: function(list, index, itm, event){
                  selectedTicket = Zone4Store.getAt(index);
                  hiddenField.setValue(selectedTicket.getId());
                  Ext.Ajax.request({
                        url: '/m/tickets/get/'+selectedTicket.getId(),              
                        method: 'GET',
                        success: function(response, opts){
                            var json = Ext.util.JSON.decode(response.responseText)
                            console.log(viewTicketTemplate.applyTemplate(json.ticket));
                            MoveCommandApp.views.viewTicket.update(json.ticket);
                        },
                        failure: function(response, opts){
                            console.log('Ext AJAX call failure with status code ' + response.status);
                        }
                      });
                  
                  MoveCommandApp.views.viewport.setActiveItem('viewTicket', {type: 'slide', direction: 'left'});
                }			
          }
        });
        
        MoveCommandApp.views.Zone5List = new Ext.List({
          id: 'Zone5List',
          store: Zone5Store,
          fullscreen: true,
          defaults: {
            scroll: 'vertical'
          },
          plugins: [{
                ptype: 'pullrefresh',
                refreshFn: function(callback, plugin) {
                var store = plugin.list.getStore();
                  store.load(function(records, operation, success) {
                    callback.call(plugin);
                    MoveCommandApp.views.tabContainer.getTabBar().getComponent(5).setBadge(Zone5Store.getCount());
                  });
                }
            }],
          itemTpl: '<div class="list-item-title">Ticket #{id} - {type} ({priorityText})</div><div class="list-item-location">{location}</div>' +
            '<div class="list-item-status">Status: {status}</div>' +
            '<div class="list-item-text">Additional Details: {text}</div>',
          listeners: {
		itemtap: function(list, index, itm, event){
                  selectedTicket = Zone5Store.getAt(index);
                  hiddenField.setValue(selectedTicket.getId());
                  Ext.Ajax.request({
                        url: '/m/tickets/get/'+selectedTicket.getId(),              
                        method: 'GET',
                        success: function(response, opts){
                            var json = Ext.util.JSON.decode(response.responseText)
                            console.log(viewTicketTemplate.applyTemplate(json.ticket));
                            MoveCommandApp.views.viewTicket.update(json.ticket);
                        },
                        failure: function(response, opts){
                            console.log('Ext AJAX call failure with status code ' + response.status);
                        }
                      });
                  
                  MoveCommandApp.views.viewport.setActiveItem('viewTicket', {type: 'slide', direction: 'left'});
                }			
          }
        });
        
        MoveCommandApp.views.Zone6List = new Ext.List({
          id: 'Zone6List',
          store: Zone6Store,
          fullscreen: true,
          defaults: {
            scroll: 'vertical'
          },
          plugins: [{
                ptype: 'pullrefresh',
                refreshFn: function(callback, plugin) {
                var store = plugin.list.getStore();
                  store.load(function(records, operation, success) {
                    callback.call(plugin);
                    MoveCommandApp.views.tabContainer.getTabBar().getComponent(6).setBadge(Zone6Store.getCount());
                  });
                }
            }],
          itemTpl: '<div class="list-item-title">Ticket #{id} - {type} ({priorityText})</div><div class="list-item-location">{location}</div>' +
            '<div class="list-item-status">Status: {status}</div>' +
            '<div class="list-item-text">Additional Details: {text}</div>',
          listeners: {
		itemtap: function(list, index, itm, event){
                  selectedTicket = Zone6Store.getAt(index);
                  hiddenField.setValue(selectedTicket.getId());
                  Ext.Ajax.request({
                        url: '/m/tickets/get/'+selectedTicket.getId(),              
                        method: 'GET',
                        success: function(response, opts){
                            var json = Ext.util.JSON.decode(response.responseText)
                            console.log(viewTicketTemplate.applyTemplate(json.ticket));
                            MoveCommandApp.views.viewTicket.update(json.ticket);
                        },
                        failure: function(response, opts){
                            console.log('Ext AJAX call failure with status code ' + response.status);
                        }
                      });
                  
                  MoveCommandApp.views.viewport.setActiveItem('viewTicket', {type: 'slide', direction: 'left'});
                }			
          }
        });
        
        MoveCommandApp.views.EscalationList = new Ext.List({
          id: 'EscalationList',
          store: EscalationStore,
          defaults: {
            scroll: 'vertical'
          },
          fullscreen: true,
          plugins: [{
                ptype: 'pullrefresh',
                refreshFn: function(callback, plugin) {
                var store = plugin.list.getStore();
                  store.load(function(records, operation, success) {
                    callback.call(plugin);
                    MoveCommandApp.views.tabContainer.getTabBar().getComponent(8).setBadge(EscalationStore.getCount());
                  });
                }
            }],
          itemTpl: '<div class="list-item-title">Ticket #{id} - {type} ({priorityText})</div><div class="list-item-location">{location}</div>' +
            '<div class="list-item-status">Status: {status}</div>' +
            '<div class="list-item-text">Additional Details: {text}</div>',
          listeners: {
		itemtap: function(list, index, itm, event){
                  selectedTicket = EscalationStore.getAt(index);
                  hiddenField.setValue(selectedTicket.getId());
                  Ext.Ajax.request({
                        url: '/m/tickets/get/'+selectedTicket.getId(),              
                        method: 'GET',
                        success: function(response, opts){
                            var json = Ext.util.JSON.decode(response.responseText)
                            console.log(viewTicketTemplate.applyTemplate(json.ticket));
                            MoveCommandApp.views.viewTicket.update(json.ticket);
                        },
                        failure: function(response, opts){
                            console.log('Ext AJAX call failure with status code ' + response.status);
                        }
                      });
                  
                  MoveCommandApp.views.viewport.setActiveItem('viewTicket', {type: 'slide', direction: 'left'});
                }			
          }
        });
          
        MoveCommandApp.views.FacilitiesList = new Ext.List({
          id: 'FacilitiesList',
          store: FacilitiesStore,
          defaults: {
            scroll: 'vertical'
          },
          fullscreen: true,
          plugins: [{
                ptype: 'pullrefresh',
                refreshFn: function(callback, plugin) {
                var store = plugin.list.getStore();
                  store.load(function(records, operation, success) {
                    callback.call(plugin);
                    MoveCommandApp.views.tabContainer.getTabBar().getComponent(9).setBadge(FacilitiesStore.getCount());
                  });
                }
            }],
          itemTpl: '<div class="list-item-title">Ticket #{id} - {type} ({priorityText})</div><div class="list-item-location">{location}</div>' +
            '<div class="list-item-status">Status: {status}</div>' +
            '<div class="list-item-text">Additional Details: {text}</div>',
          listeners: {
		itemtap: function(list, index, itm, event){
                  selectedTicket = FacilitiesStore.getAt(index);
                  Ext.Ajax.request({
                        url: '/m/tickets/get/'+selectedTicket.getId(),              
                        method: 'GET',
                        success: function(response, opts){
                            var json = Ext.util.JSON.decode(response.responseText)
                            console.log(viewTicketTemplate.applyTemplate(json.ticket));
                            MoveCommandApp.views.viewTicket.update(json.ticket);
                        },
                        failure: function(response, opts){
                            console.log('Ext AJAX call failure with status code ' + response.status);
                        }
                      });
                  
                  MoveCommandApp.views.viewport.setActiveItem('viewTicket', {type: 'slide', direction: 'left'});
                }			
          }
        });     
        
        MoveCommandApp.views.Zone7List = new Ext.List({
          id: 'Zone7List',
          store: Zone7Store,
          fullscreen: true,
          defaults: {
            scroll: 'vertical'
          },
          plugins: [{
                ptype: 'pullrefresh',
                refreshFn: function(callback, plugin) {
                var store = plugin.list.getStore();
                  store.load(function(records, operation, success) {
                    callback.call(plugin);
                    MoveCommandApp.views.tabContainer.getTabBar().getComponent(7).setBadge(Zone7Store.getCount());
                  });
                }
            }],
          itemTpl: '<div class="list-item-title">Ticket #{id} - {type} ({priorityText})</div><div class="list-item-location">{location}</div>' +
            '<div class="list-item-status">Status: {status}</div>' +
            '<div class="list-item-text">Additional Details: {text}</div>',
          listeners: {
		itemtap: function(list, index, itm, event){
                  selectedTicket = Zone7Store.getAt(index);
                  hiddenField.setValue(selectedTicket.getId());
                  Ext.Ajax.request({
                        url: '/m/tickets/get/'+selectedTicket.getId(),              
                        method: 'GET',
                        success: function(response, opts){
                            var json = Ext.util.JSON.decode(response.responseText)
                            console.log(viewTicketTemplate.applyTemplate(json.ticket));
                            MoveCommandApp.views.viewTicket.update(json.ticket);
                        },
                        failure: function(response, opts){
                            console.log('Ext AJAX call failure with status code ' + response.status);
                        }
                      });
                  
                  MoveCommandApp.views.viewport.setActiveItem('viewTicket', {type: 'slide', direction: 'left'});
                }			
          }
        });
        
        MoveCommandApp.views.InformationContainer = new Ext.TabPanel({
          id: 'infoContainer',
          tabBar: {
              layout: {
              pack: 'center'
            }
          },
          fullscreen: true,
          ui: 'light',
          cardSwitchAnimation: 'fade',
          listeners: {
            tabchange: function(tp,newTab){
               var um = newTab.getUpdater();
               if(um) um.refresh();
            }
         },
          defaults: {
            scroll: 'both'
          },
          items: [{
            title: '5TSQ-11',
            html: '<img id="map" src="/sites/all/themes/mobile/5TSQ_11a2.png" />',
            iconCls: 'info',
            cls: 'card1'
          }, {
            title: '75-3',
            html: '<img id="map2" src="/sites/all/themes/mobile/75_3a.png" />',
            iconCls: 'info',
            cls: 'card1'
          }, {
            title: '75-5',
            html: '<img id="map3" src="/sites/all/themes/mobile/75_5a.png" />',
            iconCls: 'info',
            cls: 'card1'
          }, {
            title: '75-4',
            html: '<img id="map4" src="/sites/all/themes/mobile/75_4a.png" />',
            iconCls: 'info',
            cls: 'card1'
          }]
        });
        
        var img = Ext.get('map');
    img.on('pinch', function(e){
            var dimensions = img.getSize(),
                factor = 5;
            if(e.deltaScale < 0){
                factor *= -3;
            }
            img.setSize(dimensions.width + factor, dimensions.height + factor);
        });
        
        var img2 = Ext.get('map2');
    img2.on('pinch', function(e){
            var dimensions = img2.getSize(),
                factor = 5;
            if(e.deltaScale < 0){
                factor *= -3;
            }
            img2.setSize(dimensions.width + factor, dimensions.height + factor);
        });
        
        var img3 = Ext.get('map3');
    img3.on('pinch', function(e){
            var dimensions = img3.getSize(),
                factor = 5;
            if(e.deltaScale < 0){
                factor *= -3;
            }
            img3.setSize(dimensions.width + factor, dimensions.height + factor);
        });
        
        var img4 = Ext.get('map4');
    img4.on('pinch', function(e){
            var dimensions = img4.getSize(),
                factor = 5;
            if(e.deltaScale < 0){
                factor *= -3;
            }
            img4.setSize(dimensions.width + factor, dimensions.height + factor);
        });
                
        MoveCommandApp.views.tabContainer = new Ext.TabPanel({
          id: 'tabContainer',
          tabBar: {
            dock: 'bottom',
            layout: {
              pack: 'center'
            }
          },
          dockedItems: dockedViewportItems,
          fullscreen: true,
          ui: 'dark',
          cardSwitchAnimation: {
            type: 'fade',
            cover: true
          },
          listeners: {
            tabchange: function(tp,newTab){
               var um = newTab.getUpdater();
               if(um) um.refresh();
            }
         },
          defaults: {
            scroll: 'both'
          },
          items: [{
            title: 'Information',
            dockedItems:[MoveCommandApp.views.InformationContainer],
            iconCls: 'info',
            cls: 'card1'
          }, {
            title: 'Zone 1',
            items:[MoveCommandApp.views.Zone1List],
            iconCls: 'team'
          }, {
            title: 'Zone 2',
            items:[MoveCommandApp.views.Zone2List],
            iconCls: 'team'
          }, {
            title: 'Zone 3',
            id: 'zone3',
            items:[MoveCommandApp.views.Zone3List],
            iconCls: 'team'
          }, {
            title: 'Zone 4',
            id: 'zone4',
            items:[MoveCommandApp.views.Zone4List],
            iconCls: 'team'
          },{
            title: 'Zone 5',
            id: 'zone5',
            items:[MoveCommandApp.views.Zone5List],
            iconCls: 'team'
          },{
            title: 'Zone 6',
            id: 'zone6',
            items:[MoveCommandApp.views.Zone6List],
            iconCls: 'team'
          },{
            title: 'Zone 7',
            id: 'zone7',
            items:[MoveCommandApp.views.Zone7List],
            iconCls: 'team'
          },{
            title: 'Supervisor',
            id: 'l2',
            items:[MoveCommandApp.views.EscalationList],
            iconCls: 'team'
          },{
            title: 'Facilities',
            id: 'facilities',
            items:[MoveCommandApp.views.FacilitiesList],
            iconCls: 'settings'
          }]
        });
    
        MoveCommandApp.views.viewport = new Ext.Panel({
            fullscreen: true,
            layout: 'card',
            cardAnimation: 'fade',
            items: [MoveCommandApp.views.tabContainer,MoveCommandApp.views.viewTicket]
        });
        
        Zone1Store.load(function(records, operation, success) {
          MoveCommandApp.views.tabContainer.getTabBar().getComponent(1).setBadge(Zone1Store.getCount());
        });
        Zone2Store.load(function(records, operation, success) {
          MoveCommandApp.views.tabContainer.getTabBar().getComponent(2).setBadge(Zone2Store.getCount());
        });
        Zone3Store.load(function(records, operation, success) {
          MoveCommandApp.views.tabContainer.getTabBar().getComponent(3).setBadge(Zone3Store.getCount());
        });
        Zone4Store.load(function(records, operation, success) {
          MoveCommandApp.views.tabContainer.getTabBar().getComponent(4).setBadge(Zone4Store.getCount());
        });
        Zone5Store.load(function(records, operation, success) {
          MoveCommandApp.views.tabContainer.getTabBar().getComponent(5).setBadge(Zone5Store.getCount());
        });
        Zone6Store.load(function(records, operation, success) {
          MoveCommandApp.views.tabContainer.getTabBar().getComponent(6).setBadge(Zone6Store.getCount());
        });
        Zone7Store.load(function(records, operation, success) {
          MoveCommandApp.views.tabContainer.getTabBar().getComponent(7).setBadge(Zone7Store.getCount());
        });
        EscalationStore.load(function(records, operation, success) {
          MoveCommandApp.views.tabContainer.getTabBar().getComponent(8).setBadge(EscalationStore.getCount());
        });
      
        FacilitiesStore.load(function(records, operation, success) {
          MoveCommandApp.views.tabContainer.getTabBar().getComponent(9).setBadge(FacilitiesStore.getCount());
        });
                      
        var formITBase = {
        scroll: 'vertical',
        url   : '/m/tickets/create/it',
        standardSubmit : false,
        items: [{
          xtype: 'fieldset',
          title: 'Create an IT Ticket',
          instructions: 'Please enter the information above.',
          defaults: {
            required: true,
            labelAlign: 'left',
            labelWidth: '40%'
          },
          items: [
          {
            xtype: 'textfield',
            name : 'location',
            label: 'Location',
            useClearIcon: true,
            autoCapitalize : false
          },
          {
            xtype: 'selectfield',
            name: 'type',
            label: 'Type',
            options: [
                    {value:0, text:'Physical: Mouse - Missing/Faulty'},
                    {value:1, text:'Physical: Keyboard - Missing/Faulty'},
                    {value:2, text:'Physical: Monitor – Missing cable'},
                    {value:3, text:'Physical: Monitor – Faulty'},
                    {value:4, text:'Physical: Monitor – Configuration'},
                    {value:5, text:'Physical: Monitor – Mounting Issues'},
                    {value:6, text:'Physical: Monitor - Arm'},
                    {value:7, text:'Physical: Printer'},
                    {value:8, text:'Physical: Computer Tray'},
                    {value:9, text:'Physical: A/V'},
                    {value:10, text:'Physical: Other'},
                    {value:11, text:'Configuration: Printer Mapping/Setup'},
                    {value:12, text:'Configuration: No Internet Access'},
                    {value:13, text:'Configuration: Poor Performance'},
                    {value:14, text:'Configuration: Cant Access Application'},
                    {value:15, text:'Configuration: Wont Startup'},
                    {value:16, text:'Configuration: No IPTV'},
                    {value:17, text:'Configuration: Other'},
                    {value:18, text:'Phone'},
                    {value:19, text:'Network: File Share Connectivity Issue'},
                    {value:20, text:'Network: 3.x Connectivity Issue'},
                    {value:21, text:'Network: 10.x Connectivity Issue'},
                    {value:22, text:'Other: Cable Management Issue'},
                    {value:23, text:'Other: Power Outlet Issue'},
                    {value:24, text:'Initial Setup'},
                    {value:25, text:'Initial Inspection'}]
          },
          {
            xtype: 'selectfield',
            name: 'priority',
            label: 'Priority',
            value: 1,
            options: [
                    {value:0, text:'Low'},
                    {value:1, text:'Medium'},
                    {value:2, text:'High'}]
          },{
                        xtype : 'textareafield',
                        name  : 'description',
                        label : 'Additional Details',
                        maxLength : 255,
                        maxRows : 5
                    },{
                        xtype : 'checkboxfield',
                        name  : 'auto_close',
                        label : 'Auto Close?',
                        value: 1,
                        checked:false
                    },{
                        xtype : 'checkboxfield',
                        name  : 'auto_assign',
                        label : 'Assign to Self?',
                        value: 1,
                        checked:false
                    }]
        }
        ],
        listeners : {
          submit : function(form, result){
            Zone1Store.load(function(records, operation, success) {
              MoveCommandApp.views.tabContainer.getTabBar().getComponent(1).setBadge(Zone1Store.getCount());
            });
            Zone2Store.load(function(records, operation, success) {
              MoveCommandApp.views.tabContainer.getTabBar().getComponent(2).setBadge(Zone2Store.getCount());
            });
            Zone3Store.load(function(records, operation, success) {
              MoveCommandApp.views.tabContainer.getTabBar().getComponent(3).setBadge(Zone3Store.getCount());
            });
            Zone4Store.load(function(records, operation, success) {
              MoveCommandApp.views.tabContainer.getTabBar().getComponent(4).setBadge(Zone4Store.getCount());
            });
            Zone5Store.load(function(records, operation, success) {
              MoveCommandApp.views.tabContainer.getTabBar().getComponent(5).setBadge(Zone5Store.getCount());
            });
            Zone6Store.load(function(records, operation, success) {
              MoveCommandApp.views.tabContainer.getTabBar().getComponent(6).setBadge(Zone6Store.getCount());
            });
            Zone7Store.load(function(records, operation, success) {
              MoveCommandApp.views.tabContainer.getTabBar().getComponent(7).setBadge(Zone7Store.getCount());
            });
            EscalationStore.load(function(records, operation, success) {
              MoveCommandApp.views.tabContainer.getTabBar().getComponent(8).setBadge(EscalationStore.getCount());
            });
            formIT.reset();
            formIT.hide();
          },
          exception : function(form, result){
            Ext.Msg.alert(result.msgTitle,result.msg);
            console.log('failure', Ext.toArray(arguments));
          }
        },

        dockedItems: [
        {
          xtype: 'toolbar',
          dock: 'top',
          defaults: {
            ui: 'plain'
          },
          scroll: 'horizontal',
          layout: {
            pack: 'right'
          },
          defaults: {
            iconMask: true,
            ui: 'plain'
          },
          items: [{
            iconCls: 'delete',
            handler: function() {
              formIT.reset();
              formIT.hide();
            }
          }] 
        },

        {
          xtype: 'toolbar',
          dock: 'bottom',
          items: [
          {
            xtype: 'spacer'
          },

          {
            text: 'Reset',
            handler: function() {
              formIT.reset();
            }
          },
          {
            text: 'Save',
            ui: 'confirm',
            handler: function() {
              formIT.submit({
                method  : 'POST',
                waitMsg : {
                  message:'Submitting', 
                  cls : 'demos-loading'
                }
              });
            }
          }
          ]
        }
        ]
      };

      if (Ext.is.Phone) {
        formITBase.fullscreen = true;
      } else {
        Ext.apply(formITBase, {
          autoRender: true,
          floating: true,
          modal: true,
          centered: true,
          hideOnMaskTap: false,
          height: 500,
          width: 480
        });
      }

      formIT = new Ext.form.FormPanel(formITBase);
      
      var formFacilitiesBase = {
        scroll: 'vertical',
        url   : '/m/tickets/create/facilities',
        standardSubmit : false,
        items: [{
          xtype: 'fieldset',
          title: 'Create a Facilites Ticket',
          instructions: 'Please enter the information above.',
          defaults: {
            required: true,
            labelAlign: 'left',
            labelWidth: '40%'
          },
          items: [
          {
            xtype: 'textfield',
            name : 'location',
            label: 'Location',
            useClearIcon: true,
            autoCapitalize : false
          },
          {
            xtype: 'selectfield',
            name: 'type',
            label: 'Type',
            options: [
                    {value:0, text:'Chair'},
                    {value:1, text:'Light'},
                    {value:2, text:'Climate / Temperature'},
                    {value:3, text:'Furniture'},
                    {value:4, text:'Keyboard Tray'},
                    {value:5, text:'Monitor Arm'},
                    {value:6, text:'Clean-Up'},
                    {value:7, text:'Carpet'},
                    {value:8, text:'Electrical'},
                    {value:9, text:'Glass'},
                    {value:10, text:'Windows'},
                    {value:11, text:'Ceiling'},
                    {value:12, text:'Flooring'},
                    {value:13, text:'Restroom'},
                    {value:14, text:'Plumbing'},
                    {value:15, text:'Moving'},
                    {value:16, text:'Housekeeping'},
                    {value:17, text:'Elevator'},
                    {value:18, text:'Signage'},
                    {value:19, text:'Doors'},
                    {value:20, text:'Misc'}]
          },
          {
            xtype: 'selectfield',
            name: 'priority',
            label: 'Priority',
            value: 1,
            options: [
                    {value:0, text:'Low'},
                    {value:1, text:'Medium'},
                    {value:2, text:'High'}]
          },{
                        xtype : 'textareafield',
                        name  : 'description',
                        label : 'Additional Details',
                        maxLength : 255,
                        maxRows : 5
                    }]
        }
        ],
        listeners : {
          submit : function(form, result){
            FacilitiesStore.load(function(records, operation, success) {
              MoveCommandApp.views.tabContainer.getTabBar().getComponent(9).setBadge(FacilitiesStore.getCount());
            });
            formFacilities.reset();
            formFacilities.hide();
          },
          exception : function(form, result){
            Ext.Msg.alert(result.msgTitle,result.msg);
            console.log('failure', Ext.toArray(arguments));
          }
        },

        dockedItems: [
        {
          xtype: 'toolbar',
          dock: 'top',
          defaults: {
            ui: 'plain'
          },
          scroll: 'horizontal',
          layout: {
            pack: 'right'
          },
          defaults: {
            iconMask: true,
            ui: 'plain'
          },
          items: [{
            iconCls: 'delete',
            handler: function() {
              formFacilities.reset();
              formFacilities.hide();
            }
          }] 
        },

        {
          xtype: 'toolbar',
          dock: 'bottom',
          items: [
          {
            xtype: 'spacer'
          },

          {
            text: 'Reset',
            handler: function() {
              formFacilities.reset();
            }
          },
          {
            text: 'Save',
            ui: 'confirm',
            handler: function() {
              formFacilities.submit({
                method  : 'POST',
                waitMsg : {
                  message:'Submitting', 
                  cls : 'demos-loading'
                }
              });
            }
          }
          ]
        }
        ]
      };

      if (Ext.is.Phone) {
        formFacilitiesBase.fullscreen = true;
      } else {
        Ext.apply(formFacilitiesBase, {
          autoRender: true,
          floating: true,
          modal: true,
          centered: true,
          hideOnMaskTap: false,
          height: 500,
          width: 480
        });
      }

      formFacilities = new Ext.form.FormPanel(formFacilitiesBase);
      
      var hiddenField = new Ext.form.Hidden({
        name  : 'nid',
        value : 0
      });
      
      var formCommentBase = {
        scroll: 'vertical',
        url   : '/m/tickets/create/comment',
        standardSubmit : false,
        items: [{
          xtype: 'fieldset',
          title: 'Create a Comment',
          instructions: 'Please enter the information above.',
          defaults: {
            required: true,
            labelAlign: 'left',
            labelWidth: '40%'
          },
          items: [hiddenField,{
                        xtype : 'textareafield',
                        name  : 'comment',
                        label : 'Comment',
                        maxLength : 40,
                        maxRows : 6
                    }]
        }
        ],
        listeners : {
          submit : function(form, result){
            Ext.Ajax.request({
                        url: '/m/tickets/get/'+selectedTicket.getId(),              
                        method: 'GET',
                        success: function(response, opts){
                            var json = Ext.util.JSON.decode(response.responseText)
                            console.log(viewTicketTemplate.applyTemplate(json.ticket));
                            MoveCommandApp.views.viewTicket.update(json.ticket);
                        },
                        failure: function(response, opts){
                            console.log('Ext AJAX call failure with status code ' + response.status);
                        }
                      });
                  
            formComment.reset();
            formComment.hide();
          },
          exception : function(form, result){
            Ext.Msg.alert(result.msgTitle,result.msg);
            console.log('failure', Ext.toArray(arguments));
          }
        },

        dockedItems: [
        {
          xtype: 'toolbar',
          dock: 'top',
          defaults: {
            ui: 'plain'
          },
          scroll: 'horizontal',
          layout: {
            pack: 'right'
          },
          defaults: {
            iconMask: true,
            ui: 'plain'
          },
          items: [{
            iconCls: 'delete',
            handler: function() {
              formComment.reset();
              formComment.hide();
            }
          }] 
        },

        {
          xtype: 'toolbar',
          dock: 'bottom',
          items: [
          {
            xtype: 'spacer'
          },

          {
            text: 'Reset',
            handler: function() {
              formComment.reset();
            }
          },
          {
            text: 'Save',
            ui: 'confirm',
            handler: function() {
              if(formCommentBase.user){
                formComment.updateRecord(formCommentBase.user, true);
              }
              formComment.submit({
                waitMsg : {
                  message:'Submitting', 
                  cls : 'demos-loading'
                }
              });
            }
          }
          ]
        }
        ]
      };

      if (Ext.is.Phone) {
        formCommentBase.fullscreen = true;
      } else {
        Ext.apply(formCommentBase, {
          autoRender: true,
          floating: true,
          modal: true,
          centered: true,
          hideOnMaskTap: false,
          height: 500,
          width: 480
        });
      }

      formComment = new Ext.form.FormPanel(formCommentBase);
    }
})
