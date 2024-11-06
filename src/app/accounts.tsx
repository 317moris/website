"use client";

import { toaster } from "@/components/ui/toaster";
import { ToggleTip } from "@/components/ui/toggle-tip";
import { Tooltip } from "@/components/ui/tooltip";
import {
	Card,
	Flex,
	GridItem,
	HStack,
	IconButton,
	Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useState } from "react";
import type { IconType } from "react-icons";
import { FaInfo, FaSchool } from "react-icons/fa6";

type Accounts = {
	accountId: string;
	name: string;
	icon: IconType;
	href: string;
	description: string;
};

const accounts: Accounts[] = [
	{
		accountId: "2436",
		name: "越谷総合技術高校",
		description: "越谷にある高校",
		icon: FaSchool,
		href: "https://ksg-h.spec.ed.jp",
	},
];

export default function Accounts() {
	const [copied, setCopied] = useState(-1);
	const [errored, setErrored] = useState(-1);

	return accounts.map((account, i) => (
		<GridItem key={account.name}>
			<Card.Root size="sm" h="100%" variant="subtle">
				<Card.Body>
					<Flex align="start" justify="space-between">
						<HStack mb={2}>
							<account.icon />
							<Card.Title>
								{account.href ? (
									<Link asChild variant="underline">
										<NextLink href={account.href} target="_blank">
											{account.name}
										</NextLink>
									</Link>
								) : (
									account.name
								)}
							</Card.Title>
						</HStack>
						<Tooltip
							content={
								copied === i
									? "コピーされました"
									: errored === i
										? "コピーできませんでした"
										: "コピー"
							}
							showArrow
							positioning={{ placement: "top" }}
							onExitComplete={() => {
								setCopied(-1);
								setErrored(-1);
							}}
							closeOnPointerDown={false}
							closeOnClick={false}
							openDelay={0}
						>
							<Link
								fontStyle="italic"
								colorPalette="gray"
								fontSize="sm"
								overflowWrap="anywhere"
								ml={2}
								onClick={() => {
									try {
										navigator.clipboard.writeText(account.accountId);

										setCopied(i);
									} catch (_error) {
										setErrored(i);
									}
								}}
								onTouchEnd={() => {
									toaster.create({
										title: "コピーされました",
										description: (
											<ToggleTip
												content={
													<>
														ToasterにResponsiveを追加しろChakraUI
														<br />
														ToasterのactionにIconButtonを使わせろChakraUI
														<br />
														zIndex diff
													</>
												}
											>
												<IconButton variant="surface" size="xs">
													<FaInfo />
												</IconButton>
											</ToggleTip>
										),
										action: {
											label: "閉じる",
											onClick() {},
										},
									});
								}}
							>
								{account.accountId}
							</Link>
						</Tooltip>
					</Flex>
					<Card.Description>{account.description}</Card.Description>
				</Card.Body>
			</Card.Root>
		</GridItem>
	));
}
