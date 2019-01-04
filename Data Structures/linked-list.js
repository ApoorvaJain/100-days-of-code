"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node = /** @class */ (function () {
    function Node() {
    }
    return Node;
}());
exports.Node = Node;
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
    }
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            var _l = 0;
            var current = this.head;
            while (current) {
                _l++;
                current = current.next;
            }
            return _l;
        },
        enumerable: true,
        configurable: true
    });
    LinkedList.prototype.getHead = function () {
        return this.head;
    };
    LinkedList.prototype.addNode = function (value) {
        var newNode = new Node();
        newNode.value = value;
        newNode.next = null;
        if (!this.head) {
            this.head = newNode;
            return;
        }
        var current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    };
    LinkedList.prototype.traverse = function () {
        var current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
        console.log("Length: " + this.length);
    };
    LinkedList.prototype.deleteNode = function (node) {
        if (!node) {
            return;
        }
        var current = this.head;
        var next = node.next;
        while (current.next != node) {
            current = current.next;
        }
        current.next = next;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
(function main() {
    console.log('Created New List\n');
    var linkedList = new LinkedList();
    for (var i = 0; i < 10; i++) {
        linkedList.addNode(i);
    }
    linkedList.traverse();
})();
