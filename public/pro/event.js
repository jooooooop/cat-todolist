/**
 * Created by Administrator on 2017/3/30.
 */
var f=function(){
    var _ = NEJ.P,
        _e = _('nej.e'),
        _v = _('nej.v'),
        _j = _('nej.j'),
        _p = _('nej.ut')

    /**
     * add matters
     * @private
     */
    function _doSubmit(){
        var _matter=_e._$get('add_matter').value;
        if(_matter) {
            _j._$request('create', {
                method: 'POST',
                type: 'json',
                data: 'matter='+_matter,
                onload: function (_json) {
                    if(_json.message == '200'){
                        location.reload();
                    }

                }
            })
        }

    };
    /**
     * 键盘弹起事件
     * @param e
     * @returns {boolean}
     * @private
     */
    function _doKeydown(e) {
        var event = e || window.event;
        if (event.keyCode  == 13) {
            _v._$stopDefault(event);
            _doSubmit();
        }
        return false;
    }
    //添加事件
    _v._$addEvent(_e._$get('add_matter'),'keydown',_doKeydown);




};
define(['{lib}util/form/form.js','{lib}util/ajax/xdr.js'],f);