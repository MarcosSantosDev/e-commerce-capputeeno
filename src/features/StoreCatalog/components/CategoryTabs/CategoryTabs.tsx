import * as React from 'react';

import { TabsUI } from '@/components/ui';

type Tabs = {
	id: string;
	label: string;
	children: React.ReactNode;
};

type CategoryTabsProps = {
	defaultActiveTab: string;
	tabs: Tabs[];
};

type DynamicTabs = {
	tabsTrigger: JSX.Element[];
	tabsContent: JSX.Element[];
};

const setUpTabsDynamically = (allComponents: DynamicTabs, tabCurrent: Tabs): DynamicTabs => {
	return {
		tabsTrigger: [
			...allComponents.tabsTrigger,
			<TabsUI.TabsTrigger
				key={tabCurrent.id}
				value={tabCurrent.id}
			>
				{tabCurrent.label}
			</TabsUI.TabsTrigger>,
		],
		tabsContent: [
			...allComponents.tabsContent,
			<TabsUI.TabsContent
				key={tabCurrent.id}
				value={tabCurrent.id}
				className="h-full"
			>
				{tabCurrent.children}
			</TabsUI.TabsContent>,
		],
	};
};

const CategoryTabs = ({ defaultActiveTab = '', tabs }: CategoryTabsProps) => {
	const { tabsTrigger, tabsContent } = React.useMemo(
		() => tabs.reduce(setUpTabsDynamically, { tabsTrigger: [], tabsContent: [] }),
		[tabs]
	);

	return (
		<TabsUI.Tabs
			className="size-full max-h-full"
			defaultValue={defaultActiveTab}
		>
			<TabsUI.TabsList>{tabsTrigger}</TabsUI.TabsList>
			{tabsContent}
		</TabsUI.Tabs>
	);
};

export default CategoryTabs;
