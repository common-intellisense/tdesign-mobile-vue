import Affix from './Affix.json'
import Alert from './Alert.json'
import Anchor from './Anchor.json'
import AnchorItem from './AnchorItem.json'
import AnchorTarget from './AnchorTarget.json'
import Aside from './Aside.json'
import AutoComplete from './AutoComplete.json'
import Avatar from './Avatar.json'
import AvatarGroup from './AvatarGroup.json'
import BackTop from './BackTop.json'
import Badge from './Badge.json'
import BaseTable from './BaseTable.json'
import Breadcrumb from './Breadcrumb.json'
import BreadcrumbItem from './BreadcrumbItem.json'
import Button from './Button.json'
import Calendar from './Calendar.json'
import Card from './Card.json'
import Cascader from './Cascader.json'
import Checkbox from './Checkbox.json'
import CheckboxGroup from './CheckboxGroup.json'
import CheckTag from './CheckTag.json'
import CheckTagGroup from './CheckTagGroup.json'
import Col from './Col.json'
import Collapse from './Collapse.json'
import CollapsePanel from './CollapsePanel.json'
import ColorPicker from './ColorPicker.json'
import Comment from './Comment.json'
import DatePicker from './DatePicker.json'
import DatePickerPanel from './DatePickerPanel.json'
import DateRangePicker from './DateRangePicker.json'
import DateRangePickerPanel from './DateRangePickerPanel.json'
import DescriptionItem from './DescriptionItem.json'
import Descriptions from './Descriptions.json'
import Dialog from './Dialog.json'
import Divider from './Divider.json'
import Drawer from './Drawer.json'
import Dropdown from './Dropdown.json'
import DropdownItem from './DropdownItem.json'
import DropdownMenu from './DropdownMenu.json'
import Empty from './Empty.json'
import EnhancedTable from './EnhancedTable.json'
import Footer from './Footer.json'
import Form from './Form.json'
import FormItem from './FormItem.json'
import Guide from './Guide.json'
import Header from './Header.json'
import HeadMenu from './HeadMenu.json'
import Image from './Image.json'
import ImageViewer from './ImageViewer.json'
import Input from './Input.json'
import InputAdornment from './InputAdornment.json'
import InputGroup from './InputGroup.json'
import InputNumber from './InputNumber.json'
import Layout from './Layout.json'
import Link from './Link.json'
import List from './List.json'
import ListItem from './ListItem.json'
import ListItemMeta from './ListItemMeta.json'
import Loading from './Loading.json'
import Menu from './Menu.json'
import MenuGroup from './MenuGroup.json'
import MenuItem from './MenuItem.json'
import Message from './Message.json'
import Notification from './Notification.json'
import Option from './Option.json'
import OptionGroup from './OptionGroup.json'
import Pagination from './Pagination.json'
import PaginationMini from './PaginationMini.json'
import Popconfirm from './Popconfirm.json'
import Popup from './Popup.json'
import PrimaryTable from './PrimaryTable.json'
import Progress from './Progress.json'
import Radio from './Radio.json'
import RadioGroup from './RadioGroup.json'
import RangeInput from './RangeInput.json'
import RangeInputPopup from './RangeInputPopup.json'
import Rate from './Rate.json'
import Row from './Row.json'
import Select from './Select.json'
import SelectInput from './SelectInput.json'
import Skeleton from './Skeleton.json'
import Slider from './Slider.json'
import Space from './Space.json'
import Statistic from './Statistic.json'
import StepItem from './StepItem.json'
import Steps from './Steps.json'
import StickyItem from './StickyItem.json'
import StickyTool from './StickyTool.json'
import Submenu from './Submenu.json'
import Swiper from './Swiper.json'
import Switch from './Switch.json'
import Tag from './Tag.json'
import TagInput from './TagInput.json'
import Textarea from './Textarea.json'
import Timeline from './Timeline.json'
import TimelineItem from './TimelineItem.json'
import TimePicker from './TimePicker.json'
import TimeRangePicker from './TimeRangePicker.json'
import Tooltip from './Tooltip.json'
import TooltipLite from './TooltipLite.json'
import Transfer from './Transfer.json'
import Tree from './Tree.json'
import TreeSelect from './TreeSelect.json'
import Upload from './Upload.json'
import Watermark from './Watermark.json'

export function getPropsMap() {
  return [
    Affix,
    Alert,
    Anchor,
    AnchorItem,
    AnchorTarget,
    Aside,
    AutoComplete,
    Avatar,
    AvatarGroup,
    BackTop,
    Badge,
    BaseTable,
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Calendar,
    Card,
    Cascader,
    CheckTag,
    CheckTagGroup,
    Checkbox,
    CheckboxGroup,
    Col,
    Collapse,
    CollapsePanel,
    ColorPicker,
    Comment,
    DatePicker,
    DatePickerPanel,
    DateRangePicker,
    DateRangePickerPanel,
    DescriptionItem,
    Descriptions,
    Dialog,
    Divider,
    Drawer,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    Empty,
    EnhancedTable,
    Footer,
    Form,
    FormItem,
    Guide,
    HeadMenu,
    Header,
    Image,
    ImageViewer,
    Input,
    InputAdornment,
    InputGroup,
    InputNumber,
    Layout,
    Link,
    List,
    ListItem,
    ListItemMeta,
    Loading,
    Menu,
    MenuGroup,
    MenuItem,
    Message,
    Notification,
    Option,
    OptionGroup,
    Pagination,
    PaginationMini,
    Popconfirm,
    Popup,
    PrimaryTable,
    Progress,
    Radio,
    RadioGroup,
    RangeInput,
    RangeInputPopup,
    Rate,
    Row,
    Select,
    SelectInput,
    Skeleton,
    Slider,
    Space,
    Statistic,
    StepItem,
    Steps,
    StickyItem,
    StickyTool,
    Submenu,
    Swiper,
    Switch,
    Tag,
    TagInput,
    Textarea,
    TimePicker,
    TimeRangePicker,
    Timeline,
    TimelineItem,
    Tooltip,
    TooltipLite,
    Transfer,
    Tree,
    TreeSelect,
    Upload,
    Watermark,
  ]
}

export function getComponentsMap() {
  return [
    [Affix, Affix.name, `<${hyphenate(Affix.name)}></${Affix.name}`],
    [Alert, Alert.name, `<${hyphenate(Alert.name)}></${Alert.name}`],
    [Anchor, Anchor.name, `<${hyphenate(Anchor.name)}></${Anchor.name}`],
    [AnchorItem, AnchorItem.name, `<${hyphenate(AnchorItem.name)}></${AnchorItem.name}`],
    [AnchorTarget, AnchorTarget.name, `<${hyphenate(AnchorTarget.name)}></${AnchorTarget.name}`],
    [Aside, Aside.name, `<${hyphenate(Aside.name)}></${Aside.name}`],
    [AutoComplete, AutoComplete.name, `<${hyphenate(AutoComplete.name)}></${AutoComplete.name}`],
    [Avatar, Avatar.name, `<${hyphenate(Avatar.name)}></${Avatar.name}`],
    [AvatarGroup, AvatarGroup.name, `<${hyphenate(AvatarGroup.name)}></${AvatarGroup.name}`],
    [BackTop, BackTop.name, `<${hyphenate(BackTop.name)}></${BackTop.name}`],
    [Badge, Badge.name, `<${hyphenate(Badge.name)}></${Badge.name}`],
    [BaseTable, BaseTable.name, `<${hyphenate(BaseTable.name)}></${BaseTable.name}`],
    [Breadcrumb, Breadcrumb.name, `<${hyphenate(Breadcrumb.name)}></${Breadcrumb.name}`],
    [BreadcrumbItem, BreadcrumbItem.name, `<${hyphenate(BreadcrumbItem.name)}></${BreadcrumbItem.name}`],
    [Button, Button.name, `<${hyphenate(Button.name)}></${Button.name}`],
    [Calendar, Calendar.name, `<${hyphenate(Calendar.name)}></${Calendar.name}`],
    [Card, Card.name, `<${hyphenate(Card.name)}></${Card.name}`],
    [Cascader, Cascader.name, `<${hyphenate(Cascader.name)}></${Cascader.name}`],
    [CheckTag, CheckTag.name, `<${hyphenate(CheckTag.name)}></${CheckTag.name}`],
    [CheckTagGroup, CheckTagGroup.name, `<${hyphenate(CheckTagGroup.name)}></${CheckTagGroup.name}`],
    [Checkbox, Checkbox.name, `<${hyphenate(Checkbox.name)}></${Checkbox.name}`],
    [CheckboxGroup, CheckboxGroup.name, `<${hyphenate(CheckboxGroup.name)}></${CheckboxGroup.name}`],
    [Col, Col.name, `<${hyphenate(Col.name)}></${Col.name}`],
    [Collapse, Collapse.name, `<${hyphenate(Collapse.name)}></${Collapse.name}`],
    [CollapsePanel, CollapsePanel.name, `<${hyphenate(CollapsePanel.name)}></${CollapsePanel.name}`],
    [ColorPicker, ColorPicker.name, `<${hyphenate(ColorPicker.name)}></${ColorPicker.name}`],
    [Comment, Comment.name, `<${hyphenate(Comment.name)}></${Comment.name}`],
    [DatePicker, DatePicker.name, `<${hyphenate(DatePicker.name)}></${DatePicker.name}`],
    [DatePickerPanel, DatePickerPanel.name, `<${hyphenate(DatePickerPanel.name)}></${DatePickerPanel.name}`],
    [DateRangePicker, DateRangePicker.name, `<${hyphenate(DateRangePicker.name)}></${DateRangePicker.name}`],
    [DateRangePickerPanel, DateRangePickerPanel.name, `<${hyphenate(DateRangePickerPanel.name)}></${DateRangePickerPanel.name}`],
    [DescriptionItem, DescriptionItem.name, `<${hyphenate(DescriptionItem.name)}></${DescriptionItem.name}`],
    [Descriptions, Descriptions.name, `<${hyphenate(Descriptions.name)}></${Descriptions.name}`],
    [Dialog, Dialog.name, `<${hyphenate(Dialog.name)}></${Dialog.name}`],
    [Divider, Divider.name, `<${hyphenate(Divider.name)}></${Divider.name}`],
    [Drawer, Drawer.name, `<${hyphenate(Drawer.name)}></${Drawer.name}`],
    [Dropdown, Dropdown.name, `<${hyphenate(Dropdown.name)}></${Dropdown.name}`],
    [DropdownItem, DropdownItem.name, `<${hyphenate(DropdownItem.name)}></${DropdownItem.name}`],
    [DropdownMenu, DropdownMenu.name, `<${hyphenate(DropdownMenu.name)}></${DropdownMenu.name}`],
    [Empty, Empty.name, `<${hyphenate(Empty.name)}></${Empty.name}`],
    [EnhancedTable, EnhancedTable.name, `<${hyphenate(EnhancedTable.name)}></${EnhancedTable.name}`],
    [Footer, Footer.name, `<${hyphenate(Footer.name)}></${Footer.name}`],
    [Form, Form.name, `<${hyphenate(Form.name)}></${Form.name}`],
    [FormItem, FormItem.name, `<${hyphenate(FormItem.name)}></${FormItem.name}`],
    [Guide, Guide.name, `<${hyphenate(Guide.name)}></${Guide.name}`],
    [HeadMenu, HeadMenu.name, `<${hyphenate(HeadMenu.name)}></${HeadMenu.name}`],
    [Header, Header.name, `<${hyphenate(Header.name)}></${Header.name}`],
    [Image, Image.name, `<${hyphenate(Image.name)}></${Image.name}`],
    [ImageViewer, ImageViewer.name, `<${hyphenate(ImageViewer.name)}></${ImageViewer.name}`],
    [Input, Input.name, `<${hyphenate(Input.name)}></${Input.name}`],
    [InputAdornment, InputAdornment.name, `<${hyphenate(InputAdornment.name)}></${InputAdornment.name}`],
    [InputGroup, InputGroup.name, `<${hyphenate(InputGroup.name)}></${InputGroup.name}`],
    [InputNumber, InputNumber.name, `<${hyphenate(InputNumber.name)}></${InputNumber.name}`],
    [Layout, Layout.name, `<${hyphenate(Layout.name)}></${Layout.name}`],
    [Link, Link.name, `<${hyphenate(Link.name)}></${Link.name}`],
    [List, List.name, `<${hyphenate(List.name)}></${List.name}`],
    [ListItem, ListItem.name, `<${hyphenate(ListItem.name)}></${ListItem.name}`],
    [ListItemMeta, ListItemMeta.name, `<${hyphenate(ListItemMeta.name)}></${ListItemMeta.name}`],
    [Loading, Loading.name, `<${hyphenate(Loading.name)}></${Loading.name}`],
    [Menu, Menu.name, `<${hyphenate(Menu.name)}></${Menu.name}`],
    [MenuGroup, MenuGroup.name, `<${hyphenate(MenuGroup.name)}></${MenuGroup.name}`],
    [MenuItem, MenuItem.name, `<${hyphenate(MenuItem.name)}></${MenuItem.name}`],
    [Message, Message.name, `<${hyphenate(Message.name)}></${Message.name}`],
    [Notification, Notification.name, `<${hyphenate(Notification.name)}></${Notification.name}`],
    [Option, Option.name, `<${hyphenate(Option.name)}></${Option.name}`],
    [OptionGroup, OptionGroup.name, `<${hyphenate(OptionGroup.name)}></${OptionGroup.name}`],
    [Pagination, Pagination.name, `<${hyphenate(Pagination.name)}></${Pagination.name}`],
    [PaginationMini, PaginationMini.name, `<${hyphenate(PaginationMini.name)}></${PaginationMini.name}`],
    [Popconfirm, Popconfirm.name, `<${hyphenate(Popconfirm.name)}></${Popconfirm.name}`],
    [Popup, Popup.name, `<${hyphenate(Popup.name)}></${Popup.name}`],
    [PrimaryTable, PrimaryTable.name, `<${hyphenate(PrimaryTable.name)}></${PrimaryTable.name}`],
    [Progress, Progress.name, `<${hyphenate(Progress.name)}></${Progress.name}`],
    [Radio, Radio.name, `<${hyphenate(Radio.name)}></${Radio.name}`],
    [RadioGroup, RadioGroup.name, `<${hyphenate(RadioGroup.name)}></${RadioGroup.name}`],
    [RangeInput, RangeInput.name, `<${hyphenate(RangeInput.name)}></${RangeInput.name}`],
    [RangeInputPopup, RangeInputPopup.name, `<${hyphenate(RangeInputPopup.name)}></${RangeInputPopup.name}`],
    [Rate, Rate.name, `<${hyphenate(Rate.name)}></${Rate.name}`],
    [Row, Row.name, `<${hyphenate(Row.name)}></${Row.name}`],
    [Select, Select.name, `<${hyphenate(Select.name)}></${Select.name}`],
    [SelectInput, SelectInput.name, `<${hyphenate(SelectInput.name)}></${SelectInput.name}`],
    [Skeleton, Skeleton.name, `<${hyphenate(Skeleton.name)}></${Skeleton.name}`],
    [Slider, Slider.name, `<${hyphenate(Slider.name)}></${Slider.name}`],
    [Space, Space.name, `<${hyphenate(Space.name)}></${Space.name}`],
    [Statistic, Statistic.name, `<${hyphenate(Statistic.name)}></${Statistic.name}`],
    [StepItem, StepItem.name, `<${hyphenate(StepItem.name)}></${StepItem.name}`],
    [Steps, Steps.name, `<${hyphenate(Steps.name)}></${Steps.name}`],
    [StickyItem, StickyItem.name, `<${hyphenate(StickyItem.name)}></${StickyItem.name}`],
    [StickyTool, StickyTool.name, `<${hyphenate(StickyTool.name)}></${StickyTool.name}`],
    [Submenu, Submenu.name, `<${hyphenate(Submenu.name)}></${Submenu.name}`],
    [Swiper, Swiper.name, `<${hyphenate(Swiper.name)}></${Swiper.name}`],
    [Switch, Switch.name, `<${hyphenate(Switch.name)}></${Switch.name}`],
    [Tag, Tag.name, `<${hyphenate(Tag.name)}></${Tag.name}`],
    [TagInput, TagInput.name, `<${hyphenate(TagInput.name)}></${TagInput.name}`],
    [Textarea, Textarea.name, `<${hyphenate(Textarea.name)}></${Textarea.name}`],
    [TimePicker, TimePicker.name, `<${hyphenate(TimePicker.name)}></${TimePicker.name}`],
    [TimeRangePicker, TimeRangePicker.name, `<${hyphenate(TimeRangePicker.name)}></${TimeRangePicker.name}`],
    [Timeline, Timeline.name, `<${hyphenate(Timeline.name)}></${Timeline.name}`],
    [TimelineItem, TimelineItem.name, `<${hyphenate(TimelineItem.name)}></${TimelineItem.name}`],
    [Tooltip, Tooltip.name, `<${hyphenate(Tooltip.name)}></${Tooltip.name}`],
    [TooltipLite, TooltipLite.name, `<${hyphenate(TooltipLite.name)}></${TooltipLite.name}`],
    [Transfer, Transfer.name, `<${hyphenate(Transfer.name)}></${Transfer.name}`],
    [Tree, Tree.name, `<${hyphenate(Tree.name)}></${Tree.name}`],
    [TreeSelect, TreeSelect.name, `<${hyphenate(TreeSelect.name)}></${TreeSelect.name}`],
    [Upload, Upload.name, `<${hyphenate(Upload.name)}></${Upload.name}`],
    [Watermark, Watermark.name, `<${hyphenate(Watermark.name)}></${Watermark.name}`],
  ]
}

export function hyphenate(s: string): string {
  return s.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '')
}
